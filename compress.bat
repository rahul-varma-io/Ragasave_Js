@ECHO OFF
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )

REM java -jar ../closure-compiler-v20190709.jar  --warning_level VERBOSE --js ragasave.js --js_output_file  src/ragasave.min.js
REM java -jar ../closure-compiler-v20190709.jar --js ragasave.js --js_output_file  src/ragasave.min.js --compilation_level=ADVANCED_OPTIMIZATIONS
REM java -jar ../yuicompressor-2.4.8.jar ragasave.js -o  src/ragasave.min.js
uglifyjs ragasave.js --compress sequences=true,conditionals=true,booleans=true --keep-fnames --output src/ragasave.min.js
PAUSE
