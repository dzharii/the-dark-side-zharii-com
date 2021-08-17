call RMDIR /S /q docs 
if %errorlevel% neq 0 exit /b %errorlevel%

call robocopy build docs /mir
if %errorlevel% neq 0 exit /b %errorlevel%

call copy CNAME docs\*.* /y
if %errorlevel% neq 0 exit /b %errorlevel%