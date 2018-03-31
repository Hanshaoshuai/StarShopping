
function des(K, t, y, u, g, x) {
	var q = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756);
	var p = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344);
	var o = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584);
	var n = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928);
	var l = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080);
	var h = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312);
	var f = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154);
	var d = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696);
	var w = des_createKeys(K);
	var A = 0,
		F, D, H, J, c, b, e, I, z;
	var r, C, a, k;
	var v, B;
	var G = t.length;
	var s = 0;
	var E = w.length == 32 ? 3 : 9;
	if(E == 3) {
		z = y ? new Array(0, 32, 2) : new Array(30, -2, -2)
	} else {
		z = y ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2)
	}
	if(x == 2) {
		t += "        "
	} else {
		if(x == 1) {
			H = 8 - (G % 8);
			t += String.fromCharCode(H, H, H, H, H, H, H, H);
			if(H == 8) {
				G += 8
			}
		} else {
			if(!x) {
				t += "\0\0\0\0\0\0\0\0"
			}
		}
	}
	result = "";
	tempresult = "";
	if(u == 1) {
		r = (g.charCodeAt(A++) << 24) | (g.charCodeAt(A++) << 16) | (g.charCodeAt(A++) << 8) | g.charCodeAt(A++);
		a = (g.charCodeAt(A++) << 24) | (g.charCodeAt(A++) << 16) | (g.charCodeAt(A++) << 8) | g.charCodeAt(A++);
		A = 0
	}
	while(A < G) {
		e = (t.charCodeAt(A++) << 24) | (t.charCodeAt(A++) << 16) | (t.charCodeAt(A++) << 8) | t.charCodeAt(A++);
		I = (t.charCodeAt(A++) << 24) | (t.charCodeAt(A++) << 16) | (t.charCodeAt(A++) << 8) | t.charCodeAt(A++);
		if(u == 1) {
			if(y) {
				e ^= r;
				I ^= a
			} else {
				C = r;
				k = a;
				r = e;
				a = I
			}
		}
		H = ((e >>> 4) ^ I) & 252645135;
		I ^= H;
		e ^= (H << 4);
		H = ((e >>> 16) ^ I) & 65535;
		I ^= H;
		e ^= (H << 16);
		H = ((I >>> 2) ^ e) & 858993459;
		e ^= H;
		I ^= (H << 2);
		H = ((I >>> 8) ^ e) & 16711935;
		e ^= H;
		I ^= (H << 8);
		H = ((e >>> 1) ^ I) & 1431655765;
		I ^= H;
		e ^= (H << 1);
		e = ((e << 1) | (e >>> 31));
		I = ((I << 1) | (I >>> 31));
		for(D = 0; D < E; D += 3) {
			v = z[D + 1];
			B = z[D + 2];
			for(F = z[D]; F != v; F += B) {
				c = I ^ w[F];
				b = ((I >>> 4) | (I << 28)) ^ w[F + 1];
				H = e;
				e = I;
				I = H ^ (p[(c >>> 24) & 63] | n[(c >>> 16) & 63] | h[(c >>> 8) & 63] | d[c & 63] | q[(b >>> 24) & 63] | o[(b >>> 16) & 63] | l[(b >>> 8) & 63] | f[b & 63])
			}
			H = e;
			e = I;
			I = H
		}
		e = ((e >>> 1) | (e << 31));
		I = ((I >>> 1) | (I << 31));
		H = ((e >>> 1) ^ I) & 1431655765;
		I ^= H;
		e ^= (H << 1);
		H = ((I >>> 8) ^ e) & 16711935;
		e ^= H;
		I ^= (H << 8);
		H = ((I >>> 2) ^ e) & 858993459;
		e ^= H;
		I ^= (H << 2);
		H = ((e >>> 16) ^ I) & 65535;
		I ^= H;
		e ^= (H << 16);
		H = ((e >>> 4) ^ I) & 252645135;
		I ^= H;
		e ^= (H << 4);
		if(u == 1) {
			if(y) {
				r = e;
				a = I
			} else {
				e ^= C;
				I ^= k
			}
		}
		tempresult += String.fromCharCode((e >>> 24), ((e >>> 16) & 255), ((e >>> 8) & 255), (e & 255), (I >>> 24), ((I >>> 16) & 255), ((I >>> 8) & 255), (I & 255));
		s += 8;
		if(s == 512) {
			result += tempresult;
			tempresult = "";
			s = 0
		}
	}
	return result + tempresult
}

function des_createKeys(k) {
	pc2bytes0 = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964);
	pc2bytes1 = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697);
	pc2bytes2 = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272);
	pc2bytes3 = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144);
	pc2bytes4 = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256);
	pc2bytes5 = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488);
	pc2bytes6 = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746);
	pc2bytes7 = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568);
	pc2bytes8 = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578);
	pc2bytes9 = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488);
	pc2bytes10 = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800);
	pc2bytes11 = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744);
	pc2bytes12 = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128);
	pc2bytes13 = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
	var c = k.length > 8 ? 3 : 1;
	var o = new Array(32 * c);
	var h = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
	var g, a, d = 0,
		b = 0,
		l;
	for(var e = 0; e < c; e++) {
		left = (k.charCodeAt(d++) << 24) | (k.charCodeAt(d++) << 16) | (k.charCodeAt(d++) << 8) | k.charCodeAt(d++);
		right = (k.charCodeAt(d++) << 24) | (k.charCodeAt(d++) << 16) | (k.charCodeAt(d++) << 8) | k.charCodeAt(d++);
		l = ((left >>> 4) ^ right) & 252645135;
		right ^= l;
		left ^= (l << 4);
		l = ((right >>> -16) ^ left) & 65535;
		left ^= l;
		right ^= (l << -16);
		l = ((left >>> 2) ^ right) & 858993459;
		right ^= l;
		left ^= (l << 2);
		l = ((right >>> -16) ^ left) & 65535;
		left ^= l;
		right ^= (l << -16);
		l = ((left >>> 1) ^ right) & 1431655765;
		right ^= l;
		left ^= (l << 1);
		l = ((right >>> 8) ^ left) & 16711935;
		left ^= l;
		right ^= (l << 8);
		l = ((left >>> 1) ^ right) & 1431655765;
		right ^= l;
		left ^= (l << 1);
		l = (left << 8) | ((right >>> 20) & 240);
		left = (right << 24) | ((right << 8) & 16711680) | ((right >>> 8) & 65280) | ((right >>> 24) & 240);
		right = l;
		for(var f = 0; f < h.length; f++) {
			if(h[f]) {
				left = (left << 2) | (left >>> 26);
				right = (right << 2) | (right >>> 26)
			} else {
				left = (left << 1) | (left >>> 27);
				right = (right << 1) | (right >>> 27)
			}
			left &= -15;
			right &= -15;
			g = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 15] | pc2bytes2[(left >>> 20) & 15] | pc2bytes3[(left >>> 16) & 15] | pc2bytes4[(left >>> 12) & 15] | pc2bytes5[(left >>> 8) & 15] | pc2bytes6[(left >>> 4) & 15];
			a = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 15] | pc2bytes9[(right >>> 20) & 15] | pc2bytes10[(right >>> 16) & 15] | pc2bytes11[(right >>> 12) & 15] | pc2bytes12[(right >>> 8) & 15] | pc2bytes13[(right >>> 4) & 15];
			l = ((a >>> 16) ^ g) & 65535;
			o[b++] = g ^ l;
			o[b++] = a ^ (l << 16)
		}
	}
	return o
}

function stringToHex(c) {
	var d = "0x";
	var b = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
	for(var a = 0; a < c.length; a++) {
		d += b[c.charCodeAt(a) >> 4] + b[c.charCodeAt(a) & 15]
	}
	return d
}

function hexToString(b) {
	var c = "";
	for(var a = (b.substr(0, 2) == "0x") ? 2 : 0; a < b.length; a += 2) {
		c += String.fromCharCode(parseInt(b.substr(a, 2), 16))
	}
	return c
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(g) {
	var c, e, a;
	var f, d, b;
	a = g.length;
	e = 0;
	c = "";
	while(e < a) {
		f = g.charCodeAt(e++) & 255;
		if(e == a) {
			c += base64EncodeChars.charAt(f >> 2);
			c += base64EncodeChars.charAt((f & 3) << 4);
			c += "==";
			break
		}
		d = g.charCodeAt(e++);
		if(e == a) {
			c += base64EncodeChars.charAt(f >> 2);
			c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
			c += base64EncodeChars.charAt((d & 15) << 2);
			c += "=";
			break
		}
		b = g.charCodeAt(e++);
		c += base64EncodeChars.charAt(f >> 2);
		c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
		c += base64EncodeChars.charAt(((d & 15) << 2) | ((b & 192) >> 6));
		c += base64EncodeChars.charAt(b & 63)
	}
	return c
}

function base64decode(h) {
	var g, f, d, b;
	var e, a, c;
	a = h.length;
	e = 0;
	c = "";
	while(e < a) {
		do {
			g = base64DecodeChars[h.charCodeAt(e++) & 255]
		} while (e < a && g == -1);
		if(g == -1) {
			break
		}
		do {
			f = base64DecodeChars[h.charCodeAt(e++) & 255]
		} while (e < a && f == -1);
		if(f == -1) {
			break
		}
		c += String.fromCharCode((g << 2) | ((f & 48) >> 4));
		do {
			d = h.charCodeAt(e++) & 255;
			if(d == 61) {
				return c
			}
			d = base64DecodeChars[d]
		} while (e < a && d == -1);
		if(d == -1) {
			break
		}
		c += String.fromCharCode(((f & 15) << 4) | ((d & 60) >> 2));
		do {
			b = h.charCodeAt(e++) & 255;
			if(b == 61) {
				return c
			}
			b = base64DecodeChars[b]
		} while (e < a && b == -1);
		if(b == -1) {
			break
		}
		c += String.fromCharCode(((d & 3) << 6) | b)
	}
	return c
}

function utf16to8(e) {
	var b, d, a, f;
	b = "";
	a = e.length;
	for(d = 0; d < a; d++) {
		f = e.charCodeAt(d);
		if((f >= 1) && (f <= 127)) {
			b += e.charAt(d)
		} else {
			if(f > 2047) {
				b += String.fromCharCode(224 | ((f >> 12) & 15));
				b += String.fromCharCode(128 | ((f >> 6) & 63));
				b += String.fromCharCode(128 | ((f >> 0) & 63))
			} else {
				b += String.fromCharCode(192 | ((f >> 6) & 31));
				b += String.fromCharCode(128 | ((f >> 0) & 63))
			}
		}
	}
	return b
}

function utf8to16(g) {
	var b, e, a, h;
	var f, d;
	b = "";
	a = g.length;
	e = 0;
	while(e < a) {
		h = g.charCodeAt(e++);
		switch(h >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				b += g.charAt(e - 1);
				break;
			case 12:
			case 13:
				f = g.charCodeAt(e++);
				b += String.fromCharCode(((h & 31) << 6) | (f & 63));
				break;
			case 14:
				f = g.charCodeAt(e++);
				d = g.charCodeAt(e++);
				b += String.fromCharCode(((h & 15) << 12) | ((f & 63) << 6) | ((d & 63) << 0));
				break
		}
	}
	return b
};