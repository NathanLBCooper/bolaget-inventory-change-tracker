$build_dir = ".\build"
$expo_web_output_dir = ".\app\web-build"
$expo_web_output = $expo_web_output_dir + "\*"

if(Test-Path $build_dir)
{
    Remove-Item $build_dir -Recurse -Force
}
if(Test-Path $expo_web_output_dir)
{
    Remove-Item $expo_web_output_dir -Recurse -Force
}

Rename-Item -Path ".\app\appsettings.json" -NewName "appsettings.dev.json"
Rename-Item -Path ".\app\appsettings.prod.json" -NewName "appsettings.json"

Invoke-Expression -Command: "cd app; yarn build-web; cd.."

mkdir -path $build_dir
Copy-Item -Path $expo_web_output -Destination $build_dir -Recurse
Remove-Item $expo_web_output_dir -Recurse -Force
