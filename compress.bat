@ECHO OFF
java -jar ../closure-compiler-v20190709.jar --js ragasave.js --js_output_file  src/ragasave.min.js
REM java -jar ../closure-compiler-v20190709.jar --js ragasave.js --js_output_file  src/ragasave.min.js --compilation_level=ADVANCED_OPTIMIZATIONS
PAUSE
