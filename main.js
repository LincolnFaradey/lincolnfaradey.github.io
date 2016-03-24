var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

var manager = new THREE.LoadingManager();
var objLoader = new THREE.OBJLoader(manager);
var material = new THREE.MeshNormalMaterial();

objLoader.load('objects/smth.obj', function (obj) {
    obj.traverse(function (child) {

        if (child instanceof THREE.Mesh) {
            child.material = material;
            child.rotation.x += 90;
            var render = function () {
                requestAnimationFrame( render );

                // child.rotation.x += 0.01;
                child.rotation.y -= 0.01;
                // child.rotation.z += 0.01;
                renderer.render( scene, camera );
            };

            render();
        }

    });
    scene.add(obj);
});
objLoader.load('objects/smth.obj', function (obj) {
    obj.traverse(function (child) {

        if (child instanceof THREE.Mesh) {
            child.material = material;
            child.rotation.x += 90;
            child.position.set(2, 0, 0);
            var render = function () {
                requestAnimationFrame( render );

                // child.rotation.x += 0.01;
                child.rotation.y += 0.01;
                // child.rotation.z += 0.01;
                renderer.render( scene, camera );
            };

            render();
        }

    });
    scene.add(obj);
});





