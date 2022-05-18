(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Walkcycle_HTML5 Canvas_atlas_1", frames: [[0,710,175,284],[1087,710,147,275],[904,710,181,254],[177,710,180,267],[359,710,174,275],[1236,710,147,261],[714,710,188,251],[535,710,177,268],[0,0,1941,708]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Walkcycle_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// trace_idn
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-301,-65.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-299.4,-59.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(-298.4,-66.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(-297.4,-73.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_7();
	this.instance_4.setTransform(-297.4,-65.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(-298.4,-56.75,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_9();
	this.instance_6.setTransform(-299.15,-67.5,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_10();
	this.instance_7.setTransform(-298.65,-72.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301,-73.5,95.6,143.8);


// stage content:
(lib.Walkcycle_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// walking
	this.instance = new lib.walking();
	this.instance.setTransform(3,297.1,1,1,0,0,0,-256.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-253.2,regY:-1.6,x:13.7,y:294.6},0).wait(1).to({x:21.05,y:294.8},0).wait(1).to({x:28.7,y:295},0).wait(1).to({x:36.7,y:295.2},0).wait(1).to({x:44.95,y:295.4},0).wait(1).to({x:53.6,y:295.55},0).wait(1).to({x:62.5,y:295.7},0).wait(1).to({x:71.75,y:295.9},0).wait(1).to({x:81.3,y:296},0).wait(1).to({x:91.2,y:296.15},0).wait(1).to({x:101.4,y:296.3},0).wait(1).to({x:111.9,y:296.4},0).wait(1).to({x:122.7,y:296.5},0).wait(1).to({x:133.85,y:296.6},0).wait(1).to({x:145.3,y:296.7},0).wait(1).to({x:157.1,y:296.8},0).wait(1).to({x:169.2,y:296.85},0).wait(1).to({x:181.6,y:296.95},0).wait(1).to({x:194.35,y:297},0).wait(1).to({x:207.35,y:297.05},0).wait(1).to({x:220.75,y:297.1},0).wait(1).to({x:234.4},0).wait(1).to({x:248.4},0).wait(1).to({x:262.7,y:297.15},0).wait(1).to({x:277.35},0).wait(1).to({x:292.3},0).wait(1).to({x:307.55,y:297.1},0).wait(1).to({x:323.1},0).wait(1).to({x:339,y:297.05},0).wait(1).to({x:355.25,y:297},0).wait(1).to({x:371.75,y:296.95},0).wait(1).to({x:388.6,y:296.9},0).wait(1).to({x:405.75,y:296.8},0).wait(1).to({x:423.25,y:296.75},0).wait(1).to({x:441.05,y:296.65},0).wait(1).to({x:459.15,y:296.55},0).wait(1).to({x:477.6,y:296.45},0).wait(1).to({x:496.35,y:296.35},0).wait(1).to({x:515.4,y:296.2},0).wait(1).to({x:534.8,y:296.05},0).wait(1).to({x:554.5,y:295.95},0).wait(1).to({x:574.5,y:295.75},0).wait(1).to({x:594.85,y:295.6},0).wait(1).to({x:615.5,y:295.45},0).wait(1).to({x:636.5,y:295.25},0).wait(1).to({x:657.75,y:295.05},0).wait(1).to({x:679.4,y:294.85},0).wait(1).to({x:701.3,y:294.65},0).wait(1).to({x:723.55,y:294.45},0).wait(1).to({x:746.15,y:294.2},0).wait(1).to({x:769,y:294},0).wait(1).to({x:792.25,y:293.75},0).wait(1).to({x:815.75,y:293.5},0).wait(1).to({x:839.6,y:293.25},0).wait(1).to({x:863.75,y:292.95},0).wait(1).to({x:888.25,y:292.65},0).wait(1).to({x:913.05,y:292.4},0).wait(1).to({x:938.2,y:292.1},0).wait(1).to({x:963.65,y:291.8},0).wait(1));

	// background
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-10,7.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(438.9,327.6,565.5,39.19999999999999);
// library properties:
lib.properties = {
	id: 'CEA5A6AB64A84C4EA72DE923AB42CE2C',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Walkcycle_HTML5 Canvas_atlas_1.png", id:"Walkcycle_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CEA5A6AB64A84C4EA72DE923AB42CE2C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;