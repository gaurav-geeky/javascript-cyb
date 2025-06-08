//      set Interval and   clear Interval after   a while.

    function time() {
      // Start a 1-second interval
      const intervalId = setInterval(() => {
        console.log('Tick at', new Date().toLocaleTimeString());
        // Here you can update your UI or perform other actions
      }, 1000);


      // After 10 seconds, stop the interval
      setTimeout(() => {
        clearInterval(intervalId);
        console.log('Interval stopped after 10 seconds');
      }, 10000);

    }

