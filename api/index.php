<? error_reporting(-1);
$_ = $_POST ?: $_GET;
// if (!$_) {return;}
extract($_);

$mode = $mode ?: "ls";
$handle = $handle ?: "../pages";

switch ($mode) {
	case "ls":
		$output = listdir($handle);
		echo json_encode($output);
	break;
	case "alerts":
		alerts();
	break;
	case "faires":
		faires();
	break;
	case "routes":
		routes();
	break;
	default:
		echo "try again.\n";
	break;
}
function pre($i) {
	echo "<pre>";
	print_r($i);
	echo "</pre>";
}
function array_zip($arr) {
	$out = [];
	foreach($arr[0] as $k=>$v) {
		$out[] = array_column($arr, $k);
	}
	return $out;
}
function listdir($handle) {
	if ($handle) {
		$dir = $handle;
	}
	else {
		$dir = getcwd();
	}
	$counter = 0;
	if (is_dir($dir)) {
		if ($dh = opendir($dir)) {
			while (($file = readdir($dh)) !== false) {
				if ($file == "." || $file == ".." || substr($file, 0, 1) == ".") {
					continue;
				}
				$out["index"] = $counter;
				$out["name"] = $file;
				$out["path"] = $dir . "/" . $file;
				$output[] = $out;
				$counter++;
			}
		}
	}
	return $output;
}
function alerts() {
	$str = file_get_contents("http://www.cattransit.com/route-changes-delays-detours/");
	$matches = [];

	$tags = strip_tags($str, "<a>");
	preg_match_all("/<a(.+?)> *(.+?) *<\/a>/", $tags, $matches);
	$matches = array_zip($matches);
	foreach($matches as $key=>$match):
		$matches[$key][1] = array_reverse(explode("/", $match[1]))[1];
	endforeach;
	$matches = array_slice($matches, 65, 12);
	unset($matches[6]);
	unset($matches[4]);
	echo json_encode($matches);
}
function faires() {
	echo file_get_contents("http://www.cattransit.com/fares/fixed-route/");
}
function routes() {
	$str = file_get_contents("http://www.cattransit.com/routes-and-schedules/");

	$matches = [];

	$tags = strip_tags($str, "<a>");
	preg_match_all("/<a(.+?)> *(.+?) *<\/a>/", $tags, $matches1);
	$matches1 = $matches1[0];
	foreach($matches1 as $match):
		if (strpos($match, "show-route") !== false):
			$matches[] = $match;
			continue;
		endif;
		if (strpos($match, "onclick") !== false): continue; endif;
		if (strpos($match, "javascript") !== false): continue; endif;
		if (strpos($match, "translate") !== false): continue; endif;
		if (strpos(strtolower($match), "system-map") !== false): continue; endif;
		if (strpos($match, "target") === false): continue; endif;
		if (strpos($match, "_blank") === false): continue; endif;
		$matches[] = $match;
	endforeach;
	$matches = array_chunk($matches, 2);

	$file = strip_tags($str, "<h3>");
	preg_match_all("/<h3(.*?)>(.*?)<\/h3>/", $file, $matches2);
	$matches2 = $matches2[0];

	$i = 0;
	foreach($matches2 as $match):
		if ($matches[$i]):
			array_unshift($matches[$i], preg_replace("/<\/?h3>/", "", $match));
		endif;
		$i++;
	endforeach;

	foreach($matches as $key=>$match):
		$words = explode(" ", $match[0]);
		array_unshift($matches[$key], $words[0].$words[1]);
		$matches[$key][2] = str_replace("> ", ">", $matches[$key][2]);
		$matches[$key][3] = str_replace("> ", ">", $matches[$key][3]);
		$matches[$key][] = $words[0];
		$matches[$key][] = $words[1];
	endforeach;

	echo json_encode($matches);
}

