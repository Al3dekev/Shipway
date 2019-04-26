@echo off

:: VARIABLES

:: END - VARIABLES

WHERE npm
IF %ERRORLEVEL% NEQ 0 (
  ECHO npm hasn't been recognized by the system
  ECHO Please, install the latest nodeJS ver on your machine
  goto end
) ELSE (
  echo "NPX installation initiated"
  npm install -g npx

)

:end
PAUSE
