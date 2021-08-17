call RMDIR /S /q docs 
echo %errorlevel%
if %errorlevel% neq 0 exit /b %errorlevel%


call robocopy build docs /mir
echo %errorlevel%
                 
call copy CNAME docs\*.* /y
echo %errorlevel%
if %errorlevel% neq 0 exit /b %errorlevel%
