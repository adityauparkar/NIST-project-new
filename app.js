//Importing Express library
var express = require('express');

//Importing student.js file residing in models
var bodyParser = require('body-parser');

//assigning to port 7000
var PORT = 7000;
//responses
var wresponse=0;
var presponse=0;
var dresponse=0;
var rresponse=0;
var reresponse=0;
//total
var total=0;
//scores
var wscore=0;
var pscore=0;
var dscore=0;
var rscore=0;
var rescore=0;
//average
var waverage=0;
var paverage=0;
var daverage=0;
var raverage=0;
var reaverage=0;
//weights
var w=3;
var wi1=0,wi2=0,wi3=0,wi4=0,wi5=0,wi6=0,wi7=0,wi8=0,wi9=0,wi10=0,wi11=0,wi12=0,wi13=0,wi14=0,wi15=0,wi16=0,wi17=0,wi18=0,wi19=0,wi20=0,wi21=0,wi22=0,wi23=0,wi24=0,wi25=0;
var wp1=0,wp2=0,wp3=0,wp4=0,wp5=0,wp6=0,wp7=0,wp8=0,wp9=0,wp10=0,wp11=0,wp12=0,wp13=0,wp14=0,wp15=0,wp16=0,wp17=0,wp18=0,wp19=0,wp20=0,wp21=0,wp22=0,wp23=0,wp24=0;
var wd1=0,wd2=0,wd3=0,wd4=0,wd5=0,wd6=0,wd7=0,wd8=0,wd9=0,wd10=0,wd11=0,wd12=0,wd13=0,wd14=0,wd15=0,wd16=0,wd17=0,wd18=0;
var wr1=0,wr2=0,wr3=0,wr4=0,wr5=0,wr6=0,wr7=0,wr8=0,wr9=0,wr10=0,wr11=0,wr12=0;
var wre1=0,wre2=0,wre3=0,wre4=0,wre5=0,wre6=0,wre7=0,wre8=0;
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Enabling CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/identify',function(req,res){
  res.sendFile( __dirname + "/Identify-Phase.html" );
});
app.get('/protect',function(req,res){
  res.sendFile( __dirname + "/Protect-Phase.html" );
});
app.get('/detect',function(req,res){
  res.sendFile( __dirname + "/Detect-Phase.html" );
});
app.get('/respond',function(req,res){
  res.sendFile( __dirname + "/Respond-Phase.html" );
});
app.get('/recover',function(req,res){
  res.sendFile( __dirname + "/Recover-Phase.html" );
});
app.get('/result',function(req,res){
  res.sendFile( __dirname + "/result.html" );
});
app.get('/', function(req,res){
	//res.json(this.response);
	//res.json(this.protectresponse);
	//res.json(this.detectresponse);
	//res.json(this.respondresponse);
	//res.json(this.recoverresponse);
	//console.log(this.recoverresponse);
	/*var total=0;
	total= this.response.wresponse + this.protectresponse.presponse + this.detectresponse.dresponse + this.respondresponse.rresponse + this.recoverresponse.reresponse;
	total={ total: total}
	res.json(total);*/
	everything = {
	identify: this.response,
	protect : this.protectresponse,
	detect  : this.detectresponse,
	respond : this.respondresponse,
	recover : this. recoverresponse
	}
	console.log(everything);
	res.json(everything);
});
/*app.get('/', function(req,res){
	res.json(this.protectresponse);
});
/*app.get('/detect', function(req,res){
	res.json(this.detectresponse);
});
app.get('/respond', function(req,res){
	res.json(this.respondresponse);
});*/
/*app.get('/respond', function(req,res){
	res.json(this.recoverresponse);
});*/
app.post('/api/identify', function(req, res) {
	console.log("IDENTIFY PHASE");
	var i1=parseInt(req.body.i1);
	console.log(i1);
	var i2=parseInt(req.body.i2);
	console.log(i2);
	var i3=parseInt(req.body.i3);
	console.log(i3);
	var i4=parseInt(req.body.i4);
	console.log(i4);
	var i5=parseInt(req.body.i5);
	console.log(i5);
	var i6=parseInt(req.body.i6);
	console.log(i6);
	var i7=parseInt(req.body.i7);
	console.log(i7);
	var i8=parseInt(req.body.i8);
	console.log(i8);
	var i9=parseInt(req.body.i9);
	console.log(i9);
	var i10=parseInt(req.body.i10);
	console.log(i10);
	var i11=parseInt(req.body.i11);
	console.log(i11);
	var i12=parseInt(req.body.i12);
	console.log(i12);
	var i13=parseInt(req.body.i13);
	console.log(i13);
	var i14=parseInt(req.body.i14);
	console.log(i14);
	var i15=parseInt(req.body.i15);
	console.log(i15);
	var i16=parseInt(req.body.i16);
	console.log(i16);
	var i17=parseInt(req.body.i17);
	console.log(i17);
	var i18=parseInt(req.body.i18);
	console.log(i18);
	var i19=parseInt(req.body.i19);
	console.log(i19);
	var i20=parseInt(req.body.i20);
	console.log(i20);
	var i21=parseInt(req.body.i21);
	console.log(i21);
	var i22=parseInt(req.body.i22);
	console.log(i22);
	var i23=parseInt(req.body.i23);
	console.log(i23);
	var i24=parseInt(req.body.i24);
	console.log(i24);
	var i25=parseInt(req.body.i25);
	console.log(i25);
	wi1=w*i1;
	wi2=w*i2;
	wi3=w*i3;
	wi4=w*i4;
	wi5=w*i5;
	wi6=w*i6;
	wi7=w*i7;
	wi8=w*i8;
	wi9=w*i9;
	wi10=w*i10;
	wi11=w*i11;
	wi12=w*i12;
	wi13=w*i13;
	wi14=w*i14;
	wi15=w*i15;
	wi16=w*i16;
	wi17=w*i17;
	wi18=w*i18;
	wi19=w*i19;
	wi20=w*i20;
	wi21=w*i21;
	wi22=w*i22;
	wi23=w*i23;
	wi24=w*i24;
	wi25=w*i25;
	wscore=wi1+wi2+wi3+wi4+wi5+wi6+wi7+wi8+wi9+wi10+wi11+wi12+wi13+wi14+wi15+wi16+wi17+wi18+wi19+wi20+wi21+wi22+wi23+wi24+wi25;
	wresponse=i1+i2+i3+i4+i5+i6+i7+i8+i9+i10+i11+i12+i13+i14+i15+i16+i17+i18+i19+i20+i21+i22+i23+i24+i25;
	waverage=wscore/wresponse;
  console.log("TOTAL RESPONSE FOR IDENTIFY PHASE IS:" + wresponse);
	console.log("TOTAL SCORE FOR IDENTIFY PHASE IS:" + wscore);
	console.log("AVERAGE IS:" + waverage);
	response={
	wresponse : wresponse,
	wscore : wscore,
	waverage : waverage
	}
	res.json(response);
});
app.post('/api/protect', function(req, res) {
	console.log("PROTECT PHASE");
	var p1=parseInt(req.body.p1);
	console.log(p1);
	var p2=parseInt(req.body.p2);
	console.log(p2);
	var p3=parseInt(req.body.p3);
	console.log(p3);
	var p4=parseInt(req.body.p4);
	console.log(p4);
	var p5=parseInt(req.body.p5);
	console.log(p5);
	var p6=parseInt(req.body.p6);
	console.log(p6);
	var p7=parseInt(req.body.p7);
	console.log(p7);
	var p8=parseInt(req.body.p8);
	console.log(p8);
	var p9=parseInt(req.body.p9);
	console.log(p9);
	var p10=parseInt(req.body.p10);
	console.log(p10);
	var p11=parseInt(req.body.p11);
	console.log(p11);
	var p12=parseInt(req.body.p12);
	console.log(p12);
	var p13=parseInt(req.body.p13);
	console.log(p13);
	var p14=parseInt(req.body.p14);
	console.log(p14);
	var p15=parseInt(req.body.p15);
	console.log(p15);
	var p16=parseInt(req.body.p16);
	console.log(p16);
	var p17=parseInt(req.body.p17);
	console.log(p17);
	var p18=parseInt(req.body.p18);
	console.log(p18);
	var p19=parseInt(req.body.p19);
	console.log(p19);
	var p20=parseInt(req.body.p20);
	console.log(p20);
	var p21=parseInt(req.body.p21);
	console.log(p21);
	var p22=parseInt(req.body.p22);
	console.log(p22);
	var p23=parseInt(req.body.p23);
	console.log(p23);
	var p24=parseInt(req.body.p24);
	console.log(p24);
	wp1=w*p1;
	wp2=w*p2;
	wp3=w*p3;
	wp4=w*p4;
	wp5=w*p5;
	wp6=w*p6;
	wp7=w*p7;
	wp8=w*p8;
	wp9=w*p9;
	wp10=w*p10;
	wp11=w*p11;
	wp12=w*p12;
	wp13=w*p13;
	wp14=w*p14;
	wp15=w*p15;
	wp16=w*p16;
	wp17=w*p17;
	wp18=w*p18;
	wp19=w*p19;
	wp20=w*p20;
	wp21=w*p21;
	wp22=w*p22;
	wp23=w*p23;
	wp24=w*p24;
	pscore=wp1+wp2+wp3+wp4+wp5+wp6+wp7+wp8+wp9+wp10+wp11+wp12+wp13+wp14+wp15+wp16+wp17+wp18+wp19+wp20+wp21+wp22+wp23+wp24;
	presponse=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20+p21+p22+p23+p24;
	paverage=pscore/presponse;
  console.log("TOTAL RESPONSE FOR PROTECT PHASE IS:" + presponse);
	console.log("TOTAL SCORE FOR PROTECT PHASE IS:" + pscore);
	console.log("AVERAGE IS:" + paverage);
	protectresponse={
	presponse : presponse,
	pscore : pscore,
	paverage : paverage
	}
	res.json(protectresponse);
});
app.post('/api/detect', function(req, res) {
	console.log("DETECT PHASE");
	var d1=parseInt(req.body.d1);
	console.log(d1);
	var d2=parseInt(req.body.d2);
	console.log(d2);
	var d3=parseInt(req.body.d3);
	console.log(d3);
	var d4=parseInt(req.body.d4);
	console.log(d4);
	var d5=parseInt(req.body.d5);
	console.log(d5);
	var d6=parseInt(req.body.d6);
	console.log(d6);
	var d7=parseInt(req.body.d7);
	console.log(d7);
	var d8=parseInt(req.body.d8);
	console.log(d8);
	var d9=parseInt(req.body.d9);
	console.log(d9);
	var d10=parseInt(req.body.d10);
	console.log(d10);
	var d11=parseInt(req.body.d11);
	console.log(d11);
	var d12=parseInt(req.body.d12);
	console.log(d12);
	var d13=parseInt(req.body.d13);
	console.log(d13);
	var d14=parseInt(req.body.d14);
	console.log(d14);
	var d15=parseInt(req.body.d15);
	console.log(d15);
	var d16=parseInt(req.body.d16);
	console.log(d16);
	var d17=parseInt(req.body.d17);
	console.log(d17);
	var d18=parseInt(req.body.d18);
	console.log(d18);
	wd1=w*d1;
	wd2=w*d2;
	wd3=w*d3;
	wd4=w*d4;
	wd5=w*d5;
	wd6=w*d6;
	wd7=w*d7;
	wd8=w*d8;
	wd9=w*d9;
	wd10=w*d10;
	wd11=w*d11;
	wd12=w*d12;
	wd13=w*d13;
	wd14=w*d14;
	wd15=w*d15;
	wd16=w*d16;
	wd17=w*d17;
	wd18=w*d18;
	dscore=wd1+wd2+wd3+wd4+wd5+wd6+wd7+wd8+wd9+wd10+wd11+wd12+wd13+wd14+wd15+wd16+wd17+wd18;
	dresponse=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18;
	daverage=dscore/dresponse;
  console.log("TOTAL RESPONSE FOR DETECT PHASE IS:" + dresponse);
	console.log("TOTAL SCORE FOR DETECT PHASE IS:" + dscore);
	console.log("AVERAGE IS:" + daverage);
	detectresponse={
	dresponse : dresponse,
	dscore : dscore,
	daverage : daverage
	}
	res.json(detectresponse);
});
app.post('/api/respond', function(req, res) {
	console.log("RESPOND PHASE");
	var r1=parseInt(req.body.r1);
	console.log(r1);
	var r2=parseInt(req.body.r2);
	console.log(r2);
	var r3=parseInt(req.body.r3);
	console.log(r3);
	var r4=parseInt(req.body.r4);
	console.log(r4);
	var r5=parseInt(req.body.r5);
	console.log(r5);
	var r6=parseInt(req.body.r6);
	console.log(r6);
	var r7=parseInt(req.body.r7);
	console.log(r7);
	var r8=parseInt(req.body.r8);
	console.log(r8);
	var r9=parseInt(req.body.r9);
	console.log(r9);
	var r10=parseInt(req.body.r10);
	console.log(r10);
	var r11=parseInt(req.body.r11);
	console.log(r11);
	var r12=parseInt(req.body.r12);
	console.log(r12);
	wr1=w*r1;
	wr2=w*r2;
	wr3=w*r3;
	wr4=w*r4;
	wr5=w*r5;
	wr6=w*r6;
	wr7=w*r7;
	wr8=w*r8;
	wr9=w*r9;
	wr10=w*r10;
	wr11=w*r11;
	wr12=w*r12;
	rscore=wr1+wr2+wr3+wr4+wr5+wr6+wr7+wr8+wr9+wr10+wr11+wr12;
	rresponse=r1+r2+r3+r4+r5+r6+r7+r8+r9+r10+r11+r12;
	raverage=rscore/rresponse;
  console.log("TOTAL RESPONSE FOR RESPOND PHASE IS:" + rresponse);
	console.log("TOTAL SCORE FOR RESPOND PHASE IS:" + rscore);
	console.log("AVERAGE IS:" + raverage);
	respondresponse={
	rresponse : rresponse,
	rscore: rscore,
	raverage : raverage
	}
	res.json(respondresponse);
});
app.post('/api/recover', function(req, res) {
	console.log("RECOVER PHASE");
	var re1=parseInt(req.body.re1);
	console.log(re1);
	var re2=parseInt(req.body.re2);
	console.log(re2);
	var re3=parseInt(req.body.re3);
	console.log(re3);
	var re4=parseInt(req.body.re4);
	console.log(re4);
	var re5=parseInt(req.body.re5);
	console.log(re5);
	var re6=parseInt(req.body.re6);
	console.log(re6);
	var re7=parseInt(req.body.re7);
	console.log(re7);
	var re8=parseInt(req.body.re8);
	console.log(re8);
	wre1=w*re1;
	wre2=w*re2;
	wre3=w*re3;
	wre4=w*re4;
	wre5=w*re5;
	wre6=w*re6;
	wre7=w*re7;
	wre8=w*re8;
	rescore=wre1+wre2+wre3+wre4+wre5+wre6+wre7+wre8;
	reresponse=re1+re2+re3+re4+re5+re6+re7+re8;
	reaverage=rescore/reresponse;
  console.log("TOTAL RESPONSE FOR RECOVER PHASE IS:" + reresponse);
	console.log("TOTAL SCORE FOR RECOVER PHASE IS:" + rescore);
	console.log("AVERAGE IS:" + reaverage);
	recoverresponse={
	reresponse : reresponse,
	rescore : rescore,
	reaverage : reaverage
	}
	res.json(recoverresponse);
});
app.listen(PORT);
console.log('Server is running on port ' + PORT);