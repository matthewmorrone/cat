	function createTable(tableData) {
		var table = document.createElement('table'),
			tableBody = document.createElement('tbody')
		tableData.forEach(function(rowData) {
			var row = document.createElement('tr')
			rowData.forEach(function(cellData) {
				var cell = document.createElement('td')
				cell.appendChild(document.createTextNode(cellData))
				row.appendChild(cell)
			})
			tableBody.appendChild(row)
		})
		table.appendChild(tableBody)
		return table
	}
	$(".pdf").click(function(e) {
		return
		e.preventDefault()
		e.stopPropagation()
		var $route = $(this), $path = $route.attr("href")
		PDFJS.getDocument($path).then(function(pdf) {
			return pdf.getPage(2)
		})
		.then(function(page) {
			var viewport = page.getViewport(1)
			return page.getTextContent().then(function(text) {
				// var xs = [], ys = [], tx
				// text.items.forEach(function (item) {
				// 	tx = PDFJS.Util.transform(viewport.transform, item.transform)
				// 	xs.push(tx[4]); ys.push(tx[5])
				// })
				// var boundsOfStartPoints = [Math.min.apply(null, xs), Math.min.apply(null, ys), Math.max.apply(null, xs), Math.max.apply(null, ys)];
				// console.log(boundsOfStartPoints)


				var a0 = [], a1 = [], a2 = [], a3 = [], a4 = [], a5 = []
				var textArr = text.items.map(function(o) {
					// console.log(Math.round10(o.height, -3),
					// 			Math.round10(o.width, -3),
					// 			// Math.round10(o.transform[0], -3),
					// 			Math.round10(o.transform[1], -3),
					// 			Math.round10(o.transform[2], -3),
					// 			// Math.round10(o.transform[3], -3),
					// 			Math.round10(o.transform[4], -3),
					// 			Math.round10(o.transform[5], -3))
					a0.push(Math.round10(o.height, -3))
					a1.push(Math.round10(o.width, -3))
					a2.push(Math.round10(o.transform[1], -3))
					a3.push(Math.round10(o.transform[2], -3))
					a4.push(Math.round10(o.transform[4], -3))
					a5.push(Math.round10(o.transform[5], -3))
					return o.str
				})
				var nsort = function(a, b) {return a - b}
				a0 = a0.unique().sort(nsort)
				a1 = a1.unique().sort(nsort)
				a2 = a2.unique().sort(nsort)
				a3 = a3.unique().sort(nsort)
				a4 = a4.unique().sort(nsort)
				a5 = a5.unique().sort(nsort)
				// console.log(a0, a1, a2, a3, a4, a5)

				var p = $path.replace("Schedule-Template-", "")
				function ord() {
					return [Math.min(arguments[0], arguments[1]), Math.max(arguments[0], arguments[1])]
				}

				textArr = textArr.slice(13)
				var x = []
				textArr.map(function(o, i) {
					if (o === "1" && x.length < 2) {
						x.push(i)
					}
				})
				var y = x[1] - x[0] + 1
				var table = createTable(textArr.chunk(y))
				// console.log(p, y, textArr.length, page.view[2], page.view[3], [a0.min(), a0.max()], [a1.min(), a1.max()], [a2.min(), a2.max()], [a3.min(), a3.max()], [a4.min(), a4.max()], [a5.min(), a5.max()])


				var to6 = function() {
					$(this).text($(this).text()+$(this).next().text())
					$(this).next().remove()
					// var $th = $("<th></th>")
					// $th.html('<div>'+$(this).text().trim()+'</div>')
					// $(this).after($th)
					// $(this).remove()
				}

				// $(table).find("tr").eq(0).remove()
				// $(table).find("tr").eq($(table).find("tr").length-1).find("td:gt(5)").text("")
				$(table).find("tr").each(function(i, o) {
					if ($(this).find("td").eq(0).text().match(/[^:\d\s]/)) {
						$(table).find("tr").eq(i).append($(table).find("tr").eq(i+1).find("td"))
						$(table).find("tr").eq(i).find("td").each(to6)
					}
				})
				return table
			})
		})
		.then(function(table) {
			$route.parents(".route-info").after(table)
		})
	})