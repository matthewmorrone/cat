<? error_reporting(-1);

$_ = $_POST ? $_POST : $_GET;
// if (!$_) {
// 	return;
// }

extract($_);

$mode = $mode ?: "ls";
$handle = $handle ?: "txt";

switch ($mode) {
	case "ls":
		$output = listdir($handle);
		echo json_encode($output);
	break;
	default:
		echo "try again.\n";
	break;
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
