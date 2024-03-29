(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();var p,s,T,v,E,H,h,o,u,f,d,l,w,g,y,i,b,M,x;function A(n){if(n){var e=new Stats;e.domElement.style.position="absolute",e.domElement.style.left="0",e.domElement.style.top="0",document.body.appendChild(e.domElement),requestAnimationFrame(function R(){e.update(),requestAnimationFrame(R)})}s=document.getElementById("container"),console.log(s),T=new THREE.PerspectiveCamera(50,1,.1,1e3),T.position.z=2,v=new THREE.OrthographicCamera(-1,1,1,-1,.1,1e3),v.position.z=2,E=new THREE.Scene,H=new THREE.Scene,h=new THREE.Scene;var r=new THREE.LoadingManager(()=>{i.scale.setScalar(.4),i.position.setZ(.5),i.children[0].children[0].setRotationFromEuler(new THREE.Euler(-.5*Math.PI,0,0,"XYZ")),i.lookAt(new THREE.Vector3(0,0,8.5)),i.children[0].children[0].material=c,E.add(i)}),m=new THREE.ColladaLoader(r);m.options.convertUpAxis=!0,m.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/3d-modified-heart.dae",R=>{i=R.scene});var t=new THREE.AmbientLight(13421772,.4);E.add(t);var a=new THREE.DirectionalLight(16777215,.8);a.position.set(1,1,0).normalize(),E.add(a),u=new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter,format:THREE.RGBAFormat}),f=new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter,format:THREE.RGBFormat}),d=new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter,format:THREE.RGBFormat}),o=new THREE.WebGLRenderer,o.setPixelRatio(window.devicePixelRatio/2),s.appendChild(o.domElement),w={time:{type:"f",value:1}};var c=new THREE.ShaderMaterial({uniforms:w,vertexShader:document.getElementById("shader-vert-pulse").textContent,fragmentShader:document.getElementById("shader-frag-heart").textContent});l={time:{type:"f",value:1},resolution:{type:"v2",value:new THREE.Vector2},feedbackTexture:{type:"sampler2D",value:d.texture},foregroundTexture:{type:"sampler2D",value:u.texture}};var B=new THREE.ShaderMaterial({uniforms:l,vertexShader:document.getElementById("shader-vert-feedback").textContent,fragmentShader:document.getElementById("shader-frag-feedback").textContent});p=new Date().getTime();var C=new THREE.PlaneBufferGeometry(2,2),F=new THREE.Mesh(C,B);F.scale.setScalar(.92),H.add(F),g=new THREE.MeshBasicMaterial({map:d.texture,transparent:!0,opacity:.5});var G=new THREE.PlaneBufferGeometry(2,2),k=new THREE.Mesh(G,g);h.add(k),y=new THREE.MeshBasicMaterial({map:u.texture,transparent:!0});var P=new THREE.PlaneBufferGeometry(2,2),z=new THREE.Mesh(P,y);h.add(z),L(),window.addEventListener("resize",L,!1),document.getElementById("resolution").addEventListener("change",I,!1),x="lookatmouse",b=M=.5,s.addEventListener("mousemove",W,!1)}function L(n){var e=s.getBoundingClientRect(),r=Math.min(e.width,e.height);l.resolution.value.x=r,l.resolution.value.y=r,u.setSize(r,r),f.setSize(r,r),d.setSize(r,r),o.setSize(r,r)}function I(n){var e=parseFloat(n.target.value);l.resolution.value.x=o.domElement.width,l.resolution.value.y=o.domElement.height,o.setPixelRatio(window.devicePixelRatio/e)}function W(n){var e=s.getBoundingClientRect();b=n.offsetX/e.width,M=n.offsetY/e.height,console.log(n)}function S(){var n=new Date().getTime(),e=n-p;p=n,requestAnimationFrame(S),U(e)}function U(n){var e=w.time.value+(n?n/1e3:.05);w.time.value=e,l.time.value=e,i&&i.position&&i.rotation&&(x==="lookatmouse"&&i.lookAt(new THREE.Vector3(10*(b-.5),-10*(M-.5),8.5)),x==="autorotate"&&i.children[0].children[0].setRotationFromEuler(new THREE.Euler(-.5*Math.PI,e,0,"XYZ"))),o.render(E,T,u,!1),o.render(H,v,f,!1);var r=d;d=f,f=r,l.feedbackTexture.value=d.texture,l.foregroundTexture.value=u.texture,g.map=d.texture,g.needsUpdate=!0,y.needsUpdate=!0,o.render(h,v)}A(!0);S();
