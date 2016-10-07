contract Emitter {
	event Called(string value);
	function emit() {
		Called("ignore the Assertion Error, if you see this the test worked...");
	}
}