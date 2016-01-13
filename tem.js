var ppf = require('./preprocess/lib/preprocess.js').preprocessFile;
ppf('preprocess/test/fixtures/processFile/processFileTestInclude.html', 'tem', {TEST: '0xDEADBEEF'}, function(){}, {
	srcDir: 'preprocess/test/fixtures/processFile',
	srcEol: '\n'
});
