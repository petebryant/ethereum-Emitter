contract('Emitter', function(accounts) {
  it("should emit RegisterChange event and fail (shows 1 emitted)", function(done) {
    var emitter = Emitter.deployed();
    emitter.emit().then(function(){
      assert.isTrue(false);
    }).then(done).catch(done);
  });
  it("not a test but an example of hooking up an Event Watcher", function(done) {
    var emitter = Emitter.deployed();
    var watcher = emitter.Called();

    watcher.watch(function(error, result){ 

      if (!error) {
        assert.isTrue(true);
      }
      else{
         assert.isTrue(false);
      }

      watcher.stopWatching(); 
    });
    
    emitter.emit().then(function(){
    }).then(done).catch(done);
  });
});
