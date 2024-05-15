window.onload = function() {
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");

    file.onchange = function() {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = document.getElementById("visualizer");
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var maxRadius = Math.min(centerX, centerY) * 0.9;

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            var sliceWidth = (Math.PI * 2) / bufferLength;
            var angle = 0;

            for (var i = 0; i < bufferLength; i++) {
                var barHeight = dataArray[i] * 2;

                var x = centerX + Math.cos(angle) * (maxRadius - barHeight * 0.5);
                var y = centerY + Math.sin(angle) * (maxRadius - barHeight * 0.5);

                ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();

                angle += sliceWidth;
            }

            // Scatter dots
            var dotRadius = 2;
            var dotStep = Math.floor(bufferLength / 50); // Adjust the number of dots by changing the denominator

            for (var i = 0; i < bufferLength; i += dotStep) {
                var dotX = centerX + Math.cos(i) * maxRadius * (dataArray[i] / 255);
                var dotY = centerY + Math.sin(i) * maxRadius * (dataArray[i] / 255);

                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.beginPath();
                ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        audio.play();
        renderFrame();
    };
};