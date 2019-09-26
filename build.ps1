$LASTEXITCODE = 0

$build_dir = ".\build"
$expo_web_output_dir = ".\app\web-build"
$expo_web_output = $expo_web_output_dir + "\*"

if(!$LASTEXITCODE -and (Test-Path $build_dir))
{
    Remove-Item $build_dir -Recurse -Force
}
if(!$LASTEXITCODE -and (Test-Path $expo_web_output_dir))
{
    Remove-Item $expo_web_output_dir -Recurse -Force
}

if(!$LASTEXITCODE) { Invoke-Expression -Command: "cd app; expo build:web --no-pwa; cd.." }

if(!$LASTEXITCODE) { mkdir -path $build_dir }
if(!$LASTEXITCODE) { Copy-Item -Path $expo_web_output -Destination $build_dir -Recurse }
if(!$LASTEXITCODE) { Remove-Item $expo_web_output_dir -Recurse -Force }

exit $LASTEXITCODE