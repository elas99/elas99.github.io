var width = 800;
var height = 500;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, width/height, 0.1, 1000); //lengd í burtu, width height á svarta background, 0.1 hvað sést, hornin
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor (0x000000, 1);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls( camera, renderer.domElement ); //Nota þetta til þess að geta hreyft og zoomað inn og út

// create the cube
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial({
  //Fyrir ljósið
  ambient: 0xffffff,
  color: 0xffffff,
  specular: 0xffffff,
  shininess: 50, 
  shading: THREE.SmoothShading
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);



// create lights
scene.add( new THREE.AmbientLight(0xff0040) ); // Liturinn á cube

var light = new THREE.PointLight(0xffffff, 5, 39);
light.position.set(20, 20, 20);
scene.add(light);

// set the camera
camera.position.z = 5;

// define an animation loop
var render = function () {
  requestAnimationFrame(render);
  
  // rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
};

render();