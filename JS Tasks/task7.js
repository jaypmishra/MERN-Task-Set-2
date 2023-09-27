

        var imgObj = null;
        var animate ;
        
        function init() {
           imgObj = document.getElementById('myImage');
           imgObj.style.position= 'relative'; 
           imgObj.style.left = '0px'; 
        }
        function moveRight() {
           imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
           animate = setTimeout(moveRight,20);    // call moveRight in 20msec
        }
        function stop() {
           clearTimeout(animate);
           imgObj.style.left = '0px'; 
        }
        
        window.onload = init;