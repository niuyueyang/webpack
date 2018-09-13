! function(e) {
	var n = {};

	function t(r) {
		if(n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: r
		})
	}, t.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, t.t = function(e, n) {
		if(1 & n && (e = t(e)), 8 & n) return e;
		if(4 & n && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if(t.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & n && "string" != typeof e)
			for(var o in e) t.d(r, o, function(n) {
				return e[n]
			}.bind(null, o));
		return r
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, n) {
		return Object.prototype.hasOwnProperty.call(e, n)
	}, t.p = "/assests/", t(t.s = 1)
}([, function(e, n, t) {
	t(2), t(3)
}, function(e, n) {
	console.log("game1");
	var t = function(e) {
		this.name = e, this.game1 = function() {
			return this.name
		}, this.game2 = function() {
			return this.name
		}
	};
	t.prototype.arr = function() {
		var e = [];
		return e.push(1, 2, 3, 4, 5, this.name), e
	};
	var r = new t("Lily"),
		o = r.game1(),
		u = r.arr(),
		i = r.game2();
	console.log(o, u, i), console.log("hi")
}, function(e, n) {
	console.log("game2 update");
	console.log(...[1, 2, 3, 4, 5])
}]);
//# sourceMappingURL=game.js.map