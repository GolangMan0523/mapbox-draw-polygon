const _0x21774b = _0x5a1b;
(function (_0x392f5c, _0x57c464) {
  const _0x48ae1e = _0x5a1b,
    _0x145f91 = _0x392f5c();
  while (!![]) {
    try {
      const _0x49da58 =
        parseInt(_0x48ae1e(0x1d1)) / 0x1 +
        (-parseInt(_0x48ae1e(0x1cc)) / 0x2) *
          (parseInt(_0x48ae1e(0x1cd)) / 0x3) +
        (-parseInt(_0x48ae1e(0x1e4)) / 0x4) *
          (-parseInt(_0x48ae1e(0x1e5)) / 0x5) +
        parseInt(_0x48ae1e(0x1db)) / 0x6 +
        -parseInt(_0x48ae1e(0x1d2)) / 0x7 +
        -parseInt(_0x48ae1e(0x1cf)) / 0x8 +
        (-parseInt(_0x48ae1e(0x1cb)) / 0x9) *
          (-parseInt(_0x48ae1e(0x1d5)) / 0xa);
      if (_0x49da58 === _0x57c464) break;
      else _0x145f91["push"](_0x145f91["shift"]());
    } catch (_0x4dfc72) {
      _0x145f91["push"](_0x145f91["shift"]());
    }
  }
})(_0x4d19, 0xf0ae7),
  (mapboxgl[_0x21774b(0x1e0)] = _0x21774b(0x1d7));
function _0x4d19() {
  const _0x5d6c86 = [
    "6277288HEUZJJ",
    "innerHTML",
    "898314dOMPML",
    "9706830CEunTB",
    "area",
    "draw_polygon",
    "5475940lJlxRB",
    "calculated-area",
    "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg",
    "map",
    "type",
    "draw.update",
    "161430nMChVI",
    "Map",
    "mapbox://styles/mapbox/satellite-v9",
    "draw.delete",
    "</strong></p><p>square\x20meters</p>",
    "accessToken",
    "Click\x20the\x20map\x20to\x20draw\x20a\x20polygon.",
    "getAll",
    "round",
    "7001900xUXOPK",
    "5OBRHng",
    "getElementById",
    "9BQnMpF",
    "2FzUHVe",
    "198318TGOalc",
    "features",
  ];
  _0x4d19 = function () {
    return _0x5d6c86;
  };
  return _0x4d19();
}
const map = new mapboxgl[_0x21774b(0x1dc)]({
    container: _0x21774b(0x1d8),
    style: _0x21774b(0x1dd),
    center: [-91.874, 42.76],
    zoom: 0xc,
  }),
  draw = new MapboxDraw({
    displayControlsDefault: ![],
    controls: { polygon: !![], trash: !![] },
    defaultMode: _0x21774b(0x1d4),
  });
function _0x5a1b(_0x25c41d, _0x498236) {
  const _0x4d19fd = _0x4d19();
  return (
    (_0x5a1b = function (_0x5a1b4f, _0x4c97f3) {
      _0x5a1b4f = _0x5a1b4f - 0x1cb;
      let _0x216a0a = _0x4d19fd[_0x5a1b4f];
      return _0x216a0a;
    }),
    _0x5a1b(_0x25c41d, _0x498236)
  );
}
map["addControl"](draw),
  map["on"]("draw.create", updateArea),
  map["on"](_0x21774b(0x1de), updateArea),
  map["on"](_0x21774b(0x1da), updateArea);
function updateArea(_0xbdb68e) {
  const _0x1b9265 = _0x21774b,
    _0x8eef24 = draw[_0x1b9265(0x1e2)](),
    _0xc60d71 = document[_0x1b9265(0x1e6)](_0x1b9265(0x1d6));
  if (_0x8eef24[_0x1b9265(0x1ce)]["length"] > 0x0) {
    const _0x3df723 = turf[_0x1b9265(0x1d3)](_0x8eef24),
      _0x3272c6 = Math[_0x1b9265(0x1e3)](_0x3df723 * 0x64) / 0x64;
    _0xc60d71[_0x1b9265(0x1d0)] = "<p><strong>" + _0x3272c6 + _0x1b9265(0x1df);
  } else {
    _0xc60d71[_0x1b9265(0x1d0)] = "";
    if (_0xbdb68e[_0x1b9265(0x1d9)] !== _0x1b9265(0x1de))
      alert(_0x1b9265(0x1e1));
  }
}
