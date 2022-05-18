(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.pexelsdomj310452 = function() {
	this.initialize(img.pexelsdomj310452);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5184,3456);


(lib.surface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6633").ss(1,1,1).p("EhGGgH0MCMNAAAIAAPpMiMNAAAg");
	this.shape.setTransform(448.675,50.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("EhGGAH1IAAvpMCMNAAAIAAPpg");
	this.shape_1.setTransform(448.675,50.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,899.4,102.2);


(lib.Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AMrAAQAAFQjtDuQjuDtlQAAQlPAAjujtQjtjuAAlQQAAlPDtjuQDujtFPAAQFQAADuDtQDtDuAAFPg");
	this.shape.setTransform(81.1,81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#0000FF","#000000"],[0,1],0,0,0,0,0,81.9).s().p("Ao8I9QjujtAAlQQAAlPDujtQDtjuFPAAQFQAADtDuQDuDtAAFPQAAFQjuDtQjtDulQAAQlPAAjtjug");
	this.shape_1.setTransform(81.1,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164.2,164.2);


// stage content:
(lib.BallBounce1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(-177.25,-23,1,1,0,0,0,81.1,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-86.1,y:37.1},0).wait(1).to({x:-43.05,y:75.15},0).wait(1).to({x:4,y:115.2},0).wait(1).to({x:48.05,y:160.25},0).wait(1).to({x:91.1,y:205.3},0).wait(1).to({x:124.15,y:254.35},0).wait(1).to({x:153.2,y:306.45},0).wait(1).to({x:185.25,y:359.55},0).wait(1).to({regX:81.2,scaleY:1.0308,skewX:-18.8794,x:195.35,y:391.6},0).wait(1).to({regX:81.1,scaleY:0.5555,skewX:0,x:244.3,y:441.75},0).wait(1).to({scaleY:1,x:354.55,y:379.55},0).wait(1).to({x:391.6,y:309.4},0).wait(1).to({x:427.65,y:219.25},0).wait(1).to({x:457.65,y:131.15},0).wait(1).to({x:491.7,y:11},0).wait(1).to({x:506.7,y:-102.1},0).wait(1).to({x:558.75,y:-188.25},0).wait(1).to({x:651.95,y:-92.1},0).wait(1).to({x:689.95,y:7},0).wait(1).to({x:717.05,y:98.2},0).wait(1).to({x:740.05,y:203.25},0).wait(1).to({regX:81.2,scaleY:1.0706,skewX:-20.9193,x:743.2,y:318.4},0).wait(1).to({regX:81.1,regY:81.3,scaleY:0.4693,skewX:0,x:800.1,y:444.8},0).wait(1).to({regX:81.2,regY:81.1,scaleX:0.8926,scaleY:0.8838,skewX:22.7438,x:841.1,y:387},0).wait(1).to({scaleX:0.4449,scaleY:1,skewX:0,x:894.85,y:297},0).to({_off:true},1).wait(22));

	// Suface
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6633").ss(1,1,1).p("EhGGgH0MCMNAAAIAAPpMiMNAAAg");
	this.shape.setTransform(486.725,532.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("EhGGAH1IAAvpMCMNAAAIAAPpg");
	this.shape_1.setTransform(486.725,532.825);

	this.instance_1 = new lib.surface("synched",0);
	this.instance_1.setTransform(942.95,301.6,0.6273,0.2404,90,0,0,448.9,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regX:448.9,regY:49.9,scaleX:0.6273,scaleY:0.2404,rotation:90,x:942.95,y:301.6}}]},21).to({state:[{t:this.instance_1,p:{regX:448.7,regY:50.1,scaleX:1,scaleY:1,rotation:0,x:486.75,y:532.85}}]},26).wait(1));

	// Background
	this.instance_2 = new lib.pexelsdomj310452();
	this.instance_2.setTransform(-339,-176,0.3076,0.2814);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(141,49.6,1114.7,746.8);
// library properties:
lib.properties = {
	id: 'E93A9D04C0E2401599DE3B05594DB2A8',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pexelsdomj310452.jpg", id:"pexelsdomj310452"}
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
an.compositions['E93A9D04C0E2401599DE3B05594DB2A8'] = {
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