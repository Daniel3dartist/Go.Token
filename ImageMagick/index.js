function dr(t) {
  return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray;
}
class gr {
  fileName;
  data;
  constructor(n, e) {
    this.fileName = n, this.data = e;
  }
}
const mr = {
  XmlResourceFiles: {
    log: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE logmap [
<!ELEMENT logmap (log)+>
<!ELEMENT log (#PCDATA)>
<!ATTLIST log events CDATA #IMPLIED>
<!ATTLIST log output CDATA #IMPLIED>
<!ATTLIST log filename CDATA #IMPLIED>
<!ATTLIST log generations CDATA #IMPLIED>
<!ATTLIST log limit CDATA #IMPLIED>
<!ATTLIST log format CDATA #IMPLIED>
]>
<logmap>
  <log events="None"/>
  <log output="Debug"/>
  <log filename="Magick-%g.log"/>
  <log generations="3"/>
  <log limit="2000"/>
  <log format="%t %r %u %v %d %c[%p]: %m/%f/%l/%d
  %e"/>
</logmap>
`,
    policy: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE policymap [
<!ELEMENT policymap (policy)*>
<!ATTLIST policymap xmlns CDATA #FIXED "">
<!ELEMENT policy EMPTY>
<!ATTLIST policy xmlns CDATA #FIXED "">
<!ATTLIST policy domain NMTOKEN #REQUIRED>
<!ATTLIST policy name NMTOKEN #IMPLIED>
<!ATTLIST policy pattern CDATA #IMPLIED>
<!ATTLIST policy rights NMTOKEN #IMPLIED>
<!ATTLIST policy stealth NMTOKEN #IMPLIED>
<!ATTLIST policy value CDATA #IMPLIED>
]>
<policymap>
  <policy domain="cache" name="shared-secret" value="passphrase"/>
  <policy domain="coder" rights="none" pattern="EPHEMERAL" />
  <policy domain="coder" rights="none" pattern="MVG" />
  <policy domain="coder" rights="none" pattern="MSL" />
  <policy domain="path" rights="none" pattern="@*" />
  <policy domain="path" rights="none" pattern="|*" />
</policymap>
`
  }
};
class sn {
  constructor() {
    this.log = new gr("log.xml", mr.XmlResourceFiles.log), this.policy = new gr("policy.xml", mr.XmlResourceFiles.policy);
  }
  /**
   * Gets the default configuration.
   */
  static default = new sn();
  /**
   * Gets all the configuration files.
   */
  *all() {
    yield this.log, yield this.policy;
  }
  /// <summary>
  /// Gets the log configuration.
  /// </summary>
  log;
  /// <summary>
  /// Gets the policy configuration.
  /// </summary>
  policy;
}
class nn {
  /**
   * Initializes a new instance of the {@link MagickDefine} class.
   * @param format
   * @param name The name of the define.
   * @param value The value of the define.
   */
  constructor(n, e, u) {
    this.format = n, this.name = e, this.value = u;
  }
  /**
   * Gets the format to set the define for.
   */
  format;
  /**
   * Gets the name of the define.
   */
  name;
  /**
   * Gets the value of the define.
   */
  value;
}
class su {
  format;
  constructor(n) {
    this.format = n;
  }
  createDefine(n, e) {
    return typeof e == "boolean" ? new nn(this.format, n, e ? "true" : "false") : typeof e == "string" ? new nn(this.format, n, e) : new nn(this.format, n, e.toString());
  }
  hasValue(n) {
    return n != null;
  }
}
class co {
  _x;
  _y;
  _paintMethod;
  /**
   * Initializes a new instance of the {@link DrawableColor} class.
   * @param x The X coordinate.
   * @param  y The Y coordinate.
   * @param paintMethod The paint method to use.
   */
  constructor(n, e, u) {
    this._x = n, this._y = e, this._paintMethod = u;
  }
  draw(n) {
    n.color(this._x, this._y, this._paintMethod);
  }
}
class uu {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param color The color to use.
   */
  constructor(n) {
    this._color = n;
  }
  draw(n) {
    n.fillColor(this._color);
  }
}
class ou {
  _opacity;
  /**
   * Initializes a new instance of the {@link DrawableFillOpacity} class.
   * @param opacity The opacity.
   */
  constructor(n) {
    this._opacity = n;
  }
  draw(n) {
    n.fillOpacity(this._opacity.toDouble() / 100);
  }
}
class _u {
  _pointSize;
  /**
   * Initializes a new instance of the {@link DrawableFontPointSize} class.
   * @param pointSize The point size.
   */
  constructor(n) {
    this._pointSize = n;
  }
  draw(n) {
    n.fontPointSize(this._pointSize);
  }
}
class lu {
  /**
   * Initializes a new instance of the {@link LogEvent} class.
   * @param eventType - The type of the log message.
   * @param message - The log message.
   */
  constructor(n, e) {
    this.eventType = n, this.message = e ?? "";
  }
  /**
   * Gets the type of the log message.
   */
  eventType;
  /**
   * Gets the log message.
   */
  message;
}
var yr = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Activate = 1] = "Activate", t[t.Associate = 2] = "Associate", t[t.Background = 3] = "Background", t[t.Copy = 4] = "Copy", t[t.Deactivate = 5] = "Deactivate", t[t.Discrete = 6] = "Discrete", t[t.Disassociate = 7] = "Disassociate", t[t.Extract = 8] = "Extract", t[t.Off = 9] = "Off", t[t.On = 10] = "On", t[t.Opaque = 11] = "Opaque", t[t.Remove = 12] = "Remove", t[t.Set = 13] = "Set", t[t.Shape = 14] = "Shape", t[t.Transparent = 15] = "Transparent", t[t.OffIfOpaque = 16] = "OffIfOpaque", t))(yr || {}), $ = /* @__PURE__ */ ((t) => (t[t.Red = 0] = "Red", t[
  t.Cyan = 0
  /* Red */
] = "Cyan", t[
  t.Gray = 0
  /* Red */
] = "Gray", t[t.Green = 1] = "Green", t[
  t.Magenta = 1
  /* Green */
] = "Magenta", t[t.Blue = 2] = "Blue", t[
  t.Yellow = 2
  /* Blue */
] = "Yellow", t[t.Black = 3] = "Black", t[t.Alpha = 4] = "Alpha", t[t.Index = 5] = "Index", t[t.Meta0 = 10] = "Meta0", t[t.Meta1 = 11] = "Meta1", t[t.Meta2 = 12] = "Meta2", t[t.Meta3 = 13] = "Meta3", t[t.Meta4 = 14] = "Meta4", t[t.Meta5 = 15] = "Meta5", t[t.Meta6 = 16] = "Meta6", t[t.Meta7 = 17] = "Meta7", t[t.Meta8 = 18] = "Meta8", t[t.Meta9 = 19] = "Meta9", t[t.Meta10 = 20] = "Meta10", t[t.Meta11 = 21] = "Meta11", t[t.Meta12 = 22] = "Meta12", t[t.Meta13 = 23] = "Meta13", t[t.Meta14 = 24] = "Meta14", t[t.Meta15 = 25] = "Meta15", t[t.Meta16 = 26] = "Meta16", t[t.Meta17 = 27] = "Meta17", t[t.Meta18 = 28] = "Meta18", t[t.Meta19 = 29] = "Meta19", t[t.Meta20 = 30] = "Meta20", t[t.Meta21 = 31] = "Meta21", t[t.Meta22 = 32] = "Meta22", t[t.Meta23 = 33] = "Meta23", t[t.Meta24 = 34] = "Meta24", t[t.Meta25 = 35] = "Meta25", t[t.Meta26 = 36] = "Meta26", t[t.Meta27 = 37] = "Meta27", t[t.Meta28 = 38] = "Meta28", t[t.Meta29 = 39] = "Meta29", t[t.Meta30 = 40] = "Meta30", t[t.Meta31 = 41] = "Meta31", t[t.Meta32 = 42] = "Meta32", t[t.Meta33 = 43] = "Meta33", t[t.Meta34 = 44] = "Meta34", t[t.Meta35 = 45] = "Meta35", t[t.Meta36 = 46] = "Meta36", t[t.Meta37 = 47] = "Meta37", t[t.Meta38 = 48] = "Meta38", t[t.Meta39 = 49] = "Meta39", t[t.Meta40 = 50] = "Meta40", t[t.Meta41 = 51] = "Meta41", t[t.Meta42 = 52] = "Meta42", t[t.Meta43 = 53] = "Meta43", t[t.Meta44 = 54] = "Meta44", t[t.Meta45 = 55] = "Meta45", t[t.Meta46 = 56] = "Meta46", t[t.Meta47 = 57] = "Meta47", t[t.Meta48 = 58] = "Meta48", t[t.Meta49 = 59] = "Meta49", t[t.Meta50 = 60] = "Meta50", t[t.Meta51 = 61] = "Meta51", t[t.Meta52 = 62] = "Meta52", t[t.Composite = 64] = "Composite", t))($ || {}), J = ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Red = 1] = "Red", t[t.Gray = 1] = "Gray", t[t.Cyan = 1] = "Cyan", t[t.Green = 2] = "Green", t[t.Magenta = 2] = "Magenta", t[t.Blue = 4] = "Blue", t[t.Yellow = 4] = "Yellow", t[t.Black = 8] = "Black", t[t.Alpha = 16] = "Alpha", t[t.Opacity = 16] = "Opacity", t[t.Index = 32] = "Index", t[t.Composite = 31] = "Composite", t[t.TrueAlpha = 256] = "TrueAlpha", t[t.RGB = 7] = "RGB", t[t.CMYK = 15] = "CMYK", t[t.CMYKA = 31] = "CMYKA", t[t.Meta0 = 1 << $.Meta0] = "Meta0", t[t.Meta1 = 1 << $.Meta1] = "Meta1", t[t.Meta2 = 1 << $.Meta2] = "Meta2", t[t.Meta3 = 1 << $.Meta3] = "Meta3", t[t.Meta4 = 1 << $.Meta4] = "Meta4", t[t.Meta5 = 1 << $.Meta5] = "Meta5", t[t.Meta6 = 1 << $.Meta6] = "Meta6", t[t.Meta7 = 1 << $.Meta7] = "Meta7", t[t.Meta8 = 1 << $.Meta8] = "Meta8", t[t.Meta9 = 1 << $.Meta9] = "Meta9", t[t.Meta10 = 1 << $.Meta10] = "Meta10", t[t.Meta11 = 1 << $.Meta11] = "Meta11", t[t.Meta12 = 1 << $.Meta12] = "Meta12", t[t.Meta13 = 1 << $.Meta13] = "Meta13", t[t.Meta14 = 1 << $.Meta14] = "Meta14", t[t.Meta15 = 1 << $.Meta15] = "Meta15", t[t.Meta16 = 1 << $.Meta16] = "Meta16", t[t.Meta17 = 1 << $.Meta17] = "Meta17", t[t.Meta18 = 1 << $.Meta18] = "Meta18", t[t.Meta19 = 1 << $.Meta19] = "Meta19", t[t.Meta20 = 1 << $.Meta20] = "Meta20", t[t.Meta21 = 1 << $.Meta21] = "Meta21", t[t.All = 134217727] = "All", t))(J || {});
class cu {
  constructor(n, e, u, c) {
    this.red = n, this.green = e, this.blue = u, this.white = c;
  }
  /**
   * Gets the chromaticity red primary point.
   */
  red;
  /**
   * Gets the chromaticity green primary point.
   */
  green;
  /**
   * Gets the chromaticity blue primary point.
   */
  blue;
  /**
   * Gets the chromaticity white primary point.
   */
  white;
}
var ne = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.CMY = 1] = "CMY", t[t.CMYK = 2] = "CMYK", t[t.Gray = 3] = "Gray", t[t.HCL = 4] = "HCL", t[t.HCLp = 5] = "HCLp", t[t.HSB = 6] = "HSB", t[t.HSI = 7] = "HSI", t[t.HSL = 8] = "HSL", t[t.HSV = 9] = "HSV", t[t.HWB = 10] = "HWB", t[t.Lab = 11] = "Lab", t[t.LCH = 12] = "LCH", t[t.LCHab = 13] = "LCHab", t[t.LCHuv = 14] = "LCHuv", t[t.Log = 15] = "Log", t[t.LMS = 16] = "LMS", t[t.Luv = 17] = "Luv", t[t.OHTA = 18] = "OHTA", t[t.Rec601YCbCr = 19] = "Rec601YCbCr", t[t.Rec709YCbCr = 20] = "Rec709YCbCr", t[t.RGB = 21] = "RGB", t[t.scRGB = 22] = "scRGB", t[t.sRGB = 23] = "sRGB", t[t.Transparent = 24] = "Transparent", t[t.XyY = 25] = "XyY", t[t.XYZ = 26] = "XYZ", t[t.YCbCr = 27] = "YCbCr", t[t.YCC = 28] = "YCC", t[t.YDbDr = 29] = "YDbDr", t[t.YIQ = 30] = "YIQ", t[t.YPbPr = 31] = "YPbPr", t[t.YUV = 32] = "YUV", t[t.LinearGray = 33] = "LinearGray", t[t.Jzazbz = 34] = "Jzazbz", t[t.DisplayP3 = 35] = "DisplayP3", t[t.Adobe98 = 36] = "Adobe98", t[t.ProPhoto = 37] = "ProPhoto", t[t.Oklab = 38] = "Oklab", t[t.Oklch = 39] = "Oklch", t))(ne || {});
class gu {
  colorSpace = ne.Undefined;
  copyright = null;
  description = null;
  manufacturer = null;
  model = null;
}
class mu {
  _data;
  _index;
  constructor(n) {
    this._data = n, this._index = 0, this.isLittleEndian = !1;
  }
  get index() {
    return this._index;
  }
  isLittleEndian;
  readLong() {
    return this.canRead(4) ? this.isLittleEndian ? this.readLongLSB() : this.readLongMSB() : null;
  }
  readString(n) {
    if (n == 0)
      return "";
    if (!this.canRead(n))
      return null;
    let u = new TextDecoder("utf-8").decode(this._data.subarray(this._index, this._index + n));
    const c = u.indexOf("\0");
    return c != -1 && (u = u.substring(0, c)), this._index += n, u;
  }
  seek(n) {
    return n >= this._data.length ? !1 : (this._index = n, !0);
  }
  skip(n) {
    return this._index + n >= this._data.length ? !1 : (this._index += n, !0);
  }
  canRead(n) {
    return n > this._data.length ? !1 : this._index + n <= this._data.length;
  }
  readLongLSB() {
    let n = this._data[this._index];
    return n |= this._data[this._index + 1] << 8, n |= this._data[this._index + 2] << 16, n |= this._data[this._index + 3] << 24, this._index += 4, n;
  }
  readLongMSB() {
    let n = this._data[this._index] << 24;
    return n |= this._data[this._index + 1] << 16, n |= this._data[this._index + 2] << 8, n |= this._data[this._index + 3], this._index += 4, n;
  }
}
class un {
  _data = new gu();
  _reader;
  constructor(n) {
    this._reader = new mu(n);
  }
  static read(n) {
    const e = new un(n);
    return e.readColorSpace(), e.readTagTable(), e._data;
  }
  readColorSpace() {
    this._reader.seek(16);
    const n = this._reader.readString(4);
    n != null && (this._data.colorSpace = this.determineColorSpace(n.trimEnd()));
  }
  determineColorSpace(n) {
    switch (n) {
      case "CMY":
        return ne.CMY;
      case "CMYK":
        return ne.CMYK;
      case "GRAY":
        return ne.Gray;
      case "HSL":
        return ne.HSL;
      case "HSV":
        return ne.HSV;
      case "Lab":
        return ne.Lab;
      case "Luv":
        return ne.Luv;
      case "RGB":
        return ne.sRGB;
      case "XYZ":
        return ne.XYZ;
      case "YCbr":
        return ne.YCbCr;
      default:
        return ne.Undefined;
    }
  }
  readTagTable() {
    if (!this._reader.seek(128))
      return;
    const n = this._reader.readLong();
    if (n != null)
      for (let e = 0; e < n; e++)
        switch (this._reader.readLong()) {
          case 1668313716:
            this._data.copyright = this.readTag();
            break;
          case 1684370275:
            this._data.description = this.readTag();
            break;
          case 1684893284:
            this._data.manufacturer = this.readTag();
            break;
          case 1684890724:
            this._data.model = this.readTag();
            break;
          default:
            this._reader.skip(8);
            break;
        }
  }
  readTag() {
    const n = this._reader.readLong(), e = this._reader.readLong();
    if (n === null || e === null)
      return null;
    const u = this._reader.index;
    if (!this._reader.seek(n))
      return null;
    const c = this.readTagValue(e);
    return this._reader.seek(u), c;
  }
  readTagValue(n) {
    switch (this._reader.readString(4)) {
      case "desc":
        return this.readTextDescriptionTypeValue();
      case "text":
        return this.readTextTypeValue(n);
      default:
        return null;
    }
  }
  readTextDescriptionTypeValue() {
    if (!this._reader.skip(4))
      return null;
    const n = this._reader.readLong();
    return n == null ? null : this._reader.readString(n);
  }
  readTextTypeValue(n) {
    return this._reader.skip(4) ? this._reader.readString(n) : null;
  }
}
class wr {
  constructor(n, e) {
    this.name = n, this.data = e;
  }
  name;
  data;
}
var xt = /* @__PURE__ */ ((t) => (t[t.Warning = 300] = "Warning", t[t.ResourceLimitWarning = 300] = "ResourceLimitWarning", t[t.TypeWarning = 305] = "TypeWarning", t[t.OptionWarning = 310] = "OptionWarning", t[t.DelegateWarning = 315] = "DelegateWarning", t[t.MissingDelegateWarning = 320] = "MissingDelegateWarning", t[t.CorruptImageWarning = 325] = "CorruptImageWarning", t[t.FileOpenWarning = 330] = "FileOpenWarning", t[t.BlobWarning = 335] = "BlobWarning", t[t.StreamWarning = 340] = "StreamWarning", t[t.CacheWarning = 345] = "CacheWarning", t[t.CoderWarning = 350] = "CoderWarning", t[t.FilterWarning = 352] = "FilterWarning", t[t.ModuleWarning = 355] = "ModuleWarning", t[t.DrawWarning = 360] = "DrawWarning", t[t.ImageWarning = 365] = "ImageWarning", t[t.WandWarning = 370] = "WandWarning", t[t.RandomWarning = 375] = "RandomWarning", t[t.XServerWarning = 380] = "XServerWarning", t[t.MonitorWarning = 385] = "MonitorWarning", t[t.RegistryWarning = 390] = "RegistryWarning", t[t.ConfigureWarning = 395] = "ConfigureWarning", t[t.PolicyWarning = 399] = "PolicyWarning", t[t.Error = 400] = "Error", t[t.ResourceLimitError = 400] = "ResourceLimitError", t[t.TypeError = 405] = "TypeError", t[t.OptionError = 410] = "OptionError", t[t.DelegateError = 415] = "DelegateError", t[t.MissingDelegateError = 420] = "MissingDelegateError", t[t.CorruptImageError = 425] = "CorruptImageError", t[t.FileOpenError = 430] = "FileOpenError", t[t.BlobError = 435] = "BlobError", t[t.StreamError = 440] = "StreamError", t[t.CacheError = 445] = "CacheError", t[t.CoderError = 450] = "CoderError", t[t.FilterError = 452] = "FilterError", t[t.ModuleError = 455] = "ModuleError", t[t.DrawError = 460] = "DrawError", t[t.ImageError = 465] = "ImageError", t[t.WandError = 470] = "WandError", t[t.RandomError = 475] = "RandomError", t[t.XServerError = 480] = "XServerError", t[t.MonitorError = 485] = "MonitorError", t[t.RegistryError = 490] = "RegistryError", t[t.ConfigureError = 495] = "ConfigureError", t[t.PolicyError = 499] = "PolicyError", t))(xt || {});
class K extends Error {
  _relatedErrors = [];
  /** @internal */
  constructor(n, e = xt.Error) {
    super(n), this.severity = e;
  }
  /**
   * Gets the severity of an exception.
   */
  severity;
  /**
   * Gets the exceptions that are related to this exception.
   */
  get relatedErrors() {
    return this._relatedErrors;
  }
  /** @internal */
  _setRelatedErrors(n) {
    this._relatedErrors = n;
  }
}
class fu extends wr {
  _data;
  constructor(n, e) {
    const u = typeof n == "string" ? n : "icc", c = typeof n != "string" ? n : e;
    if (super(u, c), u !== "icm" && u !== "icc")
      throw new K(`Invalid profile name: ${u}.`);
  }
  /**
   * Gets the color space of the profile.
   */
  get colorSpace() {
    return this.initialize(), this._data.colorSpace;
  }
  /**
   * Gets the copyright of the profile.
   */
  get copyright() {
    return this.initialize(), this._data.copyright;
  }
  /**
   * Gets the description of the profile.
   */
  get description() {
    return this.initialize(), this._data.description;
  }
  /**
   * Gets the manufacturer of the profile.
   */
  get manufacturer() {
    return this.initialize(), this._data.manufacturer;
  }
  /**
   * Gets the model of the profile.
   */
  get model() {
    return this.initialize(), this._data.model;
  }
  initialize() {
    this._data || (this._data = un.read(this.data));
  }
}
class on {
  constructor(n, e) {
    this.distortion = n, this.difference = e;
  }
  /**
   * Gets the difference image.
   */
  difference;
  /**
   * Gets the distortion.
   */
  distortion;
  /** @internal */
  static _create(n, e) {
    return new on(n, e);
  }
}
class pu {
  constructor(n) {
    this.metric = n;
  }
  /**
   * Gets the distortion method to use.
   */
  metric;
  /**
   * Gets or sets the color that emphasize pixel differences.
   */
  highlightColor;
  /**
   * Gets or sets the color that de-emphasize pixel differences.
   */
  lowlightColor;
  /**
   * Gets or sets the color of pixels that are inside the read mask.
   */
  masklightColor;
  /** @internal */
  _setArtifacts(n) {
    this.highlightColor !== void 0 && n.setArtifact("compare:highlight-color", this.highlightColor), this.lowlightColor !== void 0 && n.setArtifact("compare:lowlight-color", this.lowlightColor), this.masklightColor !== void 0 && n.setArtifact("compare:masklight-color", this.masklightColor);
  }
}
var Wt = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Alpha = 1] = "Alpha", t[t.Atop = 2] = "Atop", t[t.Blend = 3] = "Blend", t[t.Blur = 4] = "Blur", t[t.Bumpmap = 5] = "Bumpmap", t[t.ChangeMask = 6] = "ChangeMask", t[t.Clear = 7] = "Clear", t[t.ColorBurn = 8] = "ColorBurn", t[t.ColorDodge = 9] = "ColorDodge", t[t.Colorize = 10] = "Colorize", t[t.CopyBlack = 11] = "CopyBlack", t[t.CopyBlue = 12] = "CopyBlue", t[t.Copy = 13] = "Copy", t[t.CopyCyan = 14] = "CopyCyan", t[t.CopyGreen = 15] = "CopyGreen", t[t.CopyMagenta = 16] = "CopyMagenta", t[t.CopyAlpha = 17] = "CopyAlpha", t[t.CopyRed = 18] = "CopyRed", t[t.CopyYellow = 19] = "CopyYellow", t[t.Darken = 20] = "Darken", t[t.DarkenIntensity = 21] = "DarkenIntensity", t[t.Difference = 22] = "Difference", t[t.Displace = 23] = "Displace", t[t.Dissolve = 24] = "Dissolve", t[t.Distort = 25] = "Distort", t[t.DivideDst = 26] = "DivideDst", t[t.DivideSrc = 27] = "DivideSrc", t[t.DstAtop = 28] = "DstAtop", t[t.Dst = 29] = "Dst", t[t.DstIn = 30] = "DstIn", t[t.DstOut = 31] = "DstOut", t[t.DstOver = 32] = "DstOver", t[t.Exclusion = 33] = "Exclusion", t[t.HardLight = 34] = "HardLight", t[t.HardMix = 35] = "HardMix", t[t.Hue = 36] = "Hue", t[t.In = 37] = "In", t[t.Intensity = 38] = "Intensity", t[t.Lighten = 39] = "Lighten", t[t.LightenIntensity = 40] = "LightenIntensity", t[t.LinearBurn = 41] = "LinearBurn", t[t.LinearDodge = 42] = "LinearDodge", t[t.LinearLight = 43] = "LinearLight", t[t.Luminize = 44] = "Luminize", t[t.Mathematics = 45] = "Mathematics", t[t.MinusDst = 46] = "MinusDst", t[t.MinusSrc = 47] = "MinusSrc", t[t.Modulate = 48] = "Modulate", t[t.ModulusAdd = 49] = "ModulusAdd", t[t.ModulusSubtract = 50] = "ModulusSubtract", t[t.Multiply = 51] = "Multiply", t[t.No = 52] = "No", t[t.Out = 53] = "Out", t[t.Over = 54] = "Over", t[t.Overlay = 55] = "Overlay", t[t.PegtopLight = 56] = "PegtopLight", t[t.PinLight = 57] = "PinLight", t[t.Plus = 58] = "Plus", t[t.Replace = 59] = "Replace", t[t.Saturate = 60] = "Saturate", t[t.Screen = 61] = "Screen", t[t.SoftLight = 62] = "SoftLight", t[t.SrcAtop = 63] = "SrcAtop", t[t.Src = 64] = "Src", t[t.SrcIn = 65] = "SrcIn", t[t.SrcOut = 66] = "SrcOut", t[t.SrcOver = 67] = "SrcOver", t[t.Threshold = 68] = "Threshold", t[t.VividLight = 69] = "VividLight", t[t.Xor = 70] = "Xor", t[t.Stereo = 71] = "Stereo", t[t.Freeze = 72] = "Freeze", t[t.Interpolate = 73] = "Interpolate", t[t.Negate = 74] = "Negate", t[t.Reflect = 75] = "Reflect", t[t.SoftBurn = 76] = "SoftBurn", t[t.SoftDodge = 77] = "SoftDodge", t[t.Stamp = 78] = "Stamp", t[t.RMSE = 79] = "RMSE", t[t.SaliencyBlend = 80] = "SaliencyBlend", t[t.SeamlessBlend = 81] = "SeamlessBlend", t))(Wt || {});
class $e {
  /**
   * Gets the quantum depth.
   */
  static get depth() {
    return _._api._Quantum_Depth_Get();
  }
  /**
   * Gets the maximum value of the quantum.
   */
  static get max() {
    return _._api._Quantum_Max_Get();
  }
}
function me(t) {
  return t === 0 ? null : _._api.UTF8ToString(t);
}
function rn(t, n, e) {
  const u = t.lengthBytesUTF8(n) + 1, c = t._malloc(u);
  try {
    return t.stringToUTF8(n, c, u), e(c);
  } finally {
    t._free(c);
  }
}
function E(t, n) {
  return rn(_._api, t, n);
}
class w {
  constructor(n, e, u, c, p) {
    if (n !== void 0)
      if (typeof n == "string") {
        let h = 0;
        try {
          h = _._api._MagickColor_Create(), E(n, (S) => {
            if (_._api._MagickColor_Initialize(h, S) === 0)
              throw new K("invalid color specified");
            this.initialize(h);
          });
        } finally {
          _._api._free(h);
        }
      } else
        this.r = n, this.g = e ?? 0, this.b = u ?? 0, p === void 0 ? this.a = c ?? $e.max : (this.k = c ?? 0, this.a = p, this.isCmyk = !0);
  }
  r = 0;
  g = 0;
  b = 0;
  a = 0;
  k = 0;
  isCmyk = !1;
  /** @internal */
  static _create(n) {
    const e = new w();
    return e.initialize(n), e;
  }
  toShortString() {
    return this.a !== $e.max ? this.toString() : this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}`;
  }
  toString() {
    return this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k},${(this.a / $e.max).toFixed(4)})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}${this.toHex(this.a)}`;
  }
  /** @internal */
  _use(n) {
    let e = 0;
    try {
      e = _._api._MagickColor_Create(), _._api._MagickColor_Red_Set(e, this.r), _._api._MagickColor_Green_Set(e, this.g), _._api._MagickColor_Blue_Set(e, this.b), _._api._MagickColor_Alpha_Set(e, this.a), _._api._MagickColor_IsCMYK_Set(e, this.isCmyk ? 1 : 0), n(e);
    } finally {
      _._api._free(e);
    }
  }
  initialize(n) {
    this.r = _._api._MagickColor_Red_Get(n), this.g = _._api._MagickColor_Green_Get(n), this.b = _._api._MagickColor_Blue_Get(n), this.a = _._api._MagickColor_Alpha_Get(n), this.isCmyk = _._api._MagickColor_IsCMYK_Get(n) === 1;
  }
  toHex(n) {
    return n.toString(16).padStart(2, "0");
  }
}
var ve = /* @__PURE__ */ ((t) => (t[t.NoValue = 0] = "NoValue", t[t.PercentValue = 4096] = "PercentValue", t[t.IgnoreAspectRatio = 8192] = "IgnoreAspectRatio", t[t.Less = 16384] = "Less", t[t.Greater = 32768] = "Greater", t[t.FillArea = 65536] = "FillArea", t[t.LimitPixels = 131072] = "LimitPixels", t[t.AspectRatio = 1048576] = "AspectRatio", t))(ve || {});
class le {
  _includeXyInToString;
  _width = 0;
  _height = 0;
  _x = 0;
  _y = 0;
  _aspectRatio = !1;
  _fillArea = !1;
  _greater = !1;
  _isPercentage = !1;
  _ignoreAspectRatio = !1;
  _less = !1;
  _limitPixels = !1;
  constructor(n, e, u, c) {
    if (typeof n == "number") {
      if (u !== void 0 && c !== void 0 ? (this._width = u, this._height = c, this._x = n, this._y = e ?? 0, this._includeXyInToString = !0) : (this._width = n, this._height = e ?? this._width, this._x = 0, this._y = 0, this._includeXyInToString = !1), this._width < 0)
        throw new K("negative width is not allowed");
      if (this._height < 0)
        throw new K("negative height is not allowed");
    } else {
      this._includeXyInToString = n.indexOf("+") >= 0 || n.indexOf("-") >= 0;
      const p = _._api._MagickGeometry_Create();
      try {
        E(n, (h) => {
          const S = _._api._MagickGeometry_Initialize(p, h);
          if (S === ve.NoValue)
            throw new K("invalid geometry specified");
          this.hasFlag(S, ve.AspectRatio) ? this.initializeFromAspectRation(p, n) : this.initialize(p, S);
        });
      } finally {
        _._api._MagickGeometry_Dispose(p);
      }
    }
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  get fillArea() {
    return this._fillArea;
  }
  set fillArea(n) {
    this._fillArea = n;
  }
  get greater() {
    return this._greater;
  }
  set greater(n) {
    this._greater = n;
  }
  get height() {
    return this._height;
  }
  set height(n) {
    this._height = n;
  }
  get ignoreAspectRatio() {
    return this._ignoreAspectRatio;
  }
  set ignoreAspectRatio(n) {
    this._ignoreAspectRatio = n;
  }
  get isPercentage() {
    return this._isPercentage;
  }
  set isPercentage(n) {
    this._isPercentage = n;
  }
  get less() {
    return this._less;
  }
  set less(n) {
    this._less = n;
  }
  get limitPixels() {
    return this._limitPixels;
  }
  set limitPixels(n) {
    this._limitPixels = n;
  }
  get width() {
    return this._width;
  }
  set width(n) {
    this._width = n;
  }
  get x() {
    return this._x;
  }
  set x(n) {
    this._x = n;
  }
  get y() {
    return this._y;
  }
  set y(n) {
    this._y = n;
  }
  toString() {
    if (this._aspectRatio)
      return this._width + ":" + this._height;
    let n = "";
    return this._width == 0 && this._height == 0 ? n += "0x0" : (this._width > 0 && (n += this._width.toString()), this._height > 0 ? n += "x" + this._height.toString() : n += "x"), (this._x != 0 || this._y != 0 || this._includeXyInToString) && (this._x >= 0 && (n += "+"), n += this._x, this.y >= 0 && (n += "+"), n += this.y), this._fillArea && (n += "^"), this._greater && (n += ">"), this._isPercentage && (n += "%"), this._ignoreAspectRatio && (n += "!"), this._less && (n += "<"), this._limitPixels && (n += "@"), n;
  }
  /** @internal */
  static _fromRectangle(n) {
    if (n === 0)
      throw new K("unable to allocate memory");
    try {
      const e = _._api._MagickRectangle_Width_Get(n), u = _._api._MagickRectangle_Height_Get(n), c = _._api._MagickRectangle_X_Get(n), p = _._api._MagickRectangle_Y_Get(n);
      return new le(c, p, e, u);
    } finally {
      _._api._MagickRectangle_Dispose(n);
    }
  }
  /** @internal */
  _toRectangle(n) {
    const e = _._api._MagickRectangle_Create();
    if (e === 0)
      throw new K("unable to allocate memory");
    try {
      _._api._MagickRectangle_Width_Set(e, this._width), _._api._MagickRectangle_Height_Set(e, this._height), _._api._MagickRectangle_X_Set(e, this._x), _._api._MagickRectangle_Y_Set(e, this._y), n(e);
    } finally {
      _._api._MagickRectangle_Dispose(e);
    }
  }
  initialize(n, e) {
    this._width = _._api._MagickGeometry_Width_Get(n), this._height = _._api._MagickGeometry_Height_Get(n), this._x = _._api._MagickGeometry_X_Get(n), this._y = _._api._MagickGeometry_Y_Get(n), this._ignoreAspectRatio = this.hasFlag(e, ve.IgnoreAspectRatio), this._isPercentage = this.hasFlag(e, ve.PercentValue), this._fillArea = this.hasFlag(e, ve.FillArea), this._greater = this.hasFlag(e, ve.Greater), this._less = this.hasFlag(e, ve.Less), this._limitPixels = this.hasFlag(e, ve.LimitPixels);
  }
  initializeFromAspectRation(n, e) {
    this._aspectRatio = !0;
    const u = e.split(":");
    this._width = this.parseNumber(u[0]), this._height = this.parseNumber(u[1]), this._x = _._api._MagickGeometry_X_Get(n), this._y = _._api._MagickGeometry_Y_Get(n);
  }
  parseNumber(n) {
    let e = 0;
    for (; e < n.length && !this.isNumber(n[e]); )
      e++;
    const u = e;
    for (; e < n.length && this.isNumber(n[e]); )
      e++;
    return parseInt(n.substr(u, e - u));
  }
  isNumber(n) {
    return n >= "0" && n <= "9";
  }
  hasFlag(n, e) {
    return (n & e) === e;
  }
}
class Ie {
  constructor(n, e) {
    this.x = n, this.y = e ?? n;
  }
  /**
   * Gets the x-coordinate of this point.
   */
  x;
  /**
   * Gets the y-coordinate of this point.
   */
  y;
  /** @internal */
  static _create(n) {
    return n === 0 ? new Ie(0, 0) : new Ie(_._api._PointInfo_X_Get(n), _._api._PointInfo_Y_Get(n));
  }
}
class _n {
  constructor(n) {
    this.area = _._api._ConnectedComponent_GetArea(n), this.centroid = Ie._create(_._api._ConnectedComponent_GetCentroid(n)), this.color = w._create(_._api._ConnectedComponent_GetColor(n)), this.height = _._api._ConnectedComponent_GetHeight(n), this.id = _._api._ConnectedComponent_GetId(n), this.width = _._api._ConnectedComponent_GetWidth(n), this.x = _._api._ConnectedComponent_GetX(n), this.y = _._api._ConnectedComponent_GetY(n);
  }
  /**
   * The pixel count of the area.
   */
  area;
  /**
   * The centroid of the area.
   */
  centroid;
  /**
   * The color of the area.
   */
  color;
  /**
   * The height of the area.
   */
  height;
  /**
   * The id of the area.
   */
  id;
  /**
   * The width of the area.
   */
  width;
  /**
   * The X offset from origin.
   */
  x;
  /**
   * The Y offset from origin.
   */
  y;
  /** @internal */
  static _create(n, e) {
    const u = [];
    if (n === 0)
      return u;
    for (let c = 0; c < e; c++) {
      const p = _._api._ConnectedComponent_GetInstance(n, c);
      p === 0 || _._api._ConnectedComponent_GetArea(p) < Number.EPSILON || u.push(new _n(p));
    }
    return u;
  }
  /**
   * Returns the geometry of the area of the connected component.
   */
  toGeometry() {
    return new le(this.x, this.y, this.width, this.height);
  }
}
class hu {
  /**
   * The threshold that merges any object not within the min and max angle
   * threshold.
   **/
  angleThreshold;
  /**
   * The threshold that eliminates small objects by merging them with their
   * larger neighbors.
   */
  areaThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * circularity threshold.
   */
  circularityThreshold;
  /**
   * The number of neighbors to visit (4 or 8).
   */
  connectivity;
  /**
   * The threshold that merges any object not within the min and max diameter
   * threshold.
   */
  diameterThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * eccentricity threshold.
   */
  eccentricityThreshold;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * major threshold.
   */
  majorAxisThreshold;
  /**
   * Whether the object color in the component labeled image will be replaced
   * with the mean color from the source image (defaults to grayscale).
   */
  meanColor;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * minor threshold.
   */
  minorAxisThreshold;
  /**
   * The threshold that merges any object not within the min and max perimeter
   * threshold.
   */
  perimeterThreshold;
  constructor(n) {
    this.connectivity = n;
  }
  /** @internal */
  _setArtifacts(n) {
    this.angleThreshold !== void 0 && n.setArtifact("connected-components:angle-threshold", this.angleThreshold.toString()), this.areaThreshold !== void 0 && n.setArtifact("connected-components:area-threshold", this.areaThreshold.toString()), this.circularityThreshold !== void 0 && n.setArtifact("connected-components:circularity-threshold", this.circularityThreshold.toString()), this.diameterThreshold !== void 0 && n.setArtifact("connected-components:diameter-threshold", this.diameterThreshold.toString()), this.eccentricityThreshold !== void 0 && n.setArtifact("connected-components:eccentricity-threshold", this.eccentricityThreshold.toString()), this.majorAxisThreshold !== void 0 && n.setArtifact("connected-components:major-axis-threshold", this.majorAxisThreshold.toString()), this.meanColor !== void 0 && n.setArtifact("connected-components:mean-color", this.meanColor.toString()), this.minorAxisThreshold !== void 0 && n.setArtifact("connected-components:minor-axis-threshold", this.minorAxisThreshold.toString()), this.perimeterThreshold !== void 0 && n.setArtifact("connected-components:perimeter-threshold", this.perimeterThreshold.toString());
  }
}
var Ee = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.PixelsPerInch = 1] = "PixelsPerInch", t[t.PixelsPerCentimeter = 2] = "PixelsPerCentimeter", t))(Ee || {});
class Ke {
  constructor(n, e, u) {
    e === void 0 ? (this.x = n, this.y = n, this.units = Ee.PixelsPerInch) : u !== void 0 ? (this.x = n, this.y = e, this.units = u) : (this.x = n, this.y = n, this.units = e);
  }
  /**
   * Gets the x resolution.
   */
  x;
  /**
   * Gets the y resolution.
   */
  y;
  /**
   * Gets the units.
   */
  units;
  /**
   * Returns a string that represents the current {@link Density} object.
   */
  toString(n) {
    return n == this.units || n === Ee.Undefined || n === void 0 ? Ke.toString(this.x, this.y, n ?? Ee.Undefined) : this.units == Ee.PixelsPerCentimeter && n == Ee.PixelsPerInch ? Ke.toString(this.x * 2.54, this.y * 2.54, n) : Ke.toString(this.x / 2.54, this.y / 2.54, n);
  }
  static toString(n, e, u) {
    let c = `${n}x${e}`;
    switch (u) {
      case Ee.PixelsPerCentimeter:
        c += "cm";
        break;
      case Ee.PixelsPerInch:
        c += "inch";
        break;
    }
    return c;
  }
}
class ce {
  static _disposeAfterExecution(n, e) {
    try {
      const u = e(n);
      return u instanceof Promise ? Promise.resolve(u).then((c) => (n.dispose(), ce.checkResult(n, c), c)) : (n.dispose(), ce.checkResult(n, u), u);
    } catch (u) {
      throw n.dispose(), u;
    }
  }
  static checkResult(n, e) {
    if (e === n)
      throw new K("The result of the function cannot be the instance that has been disposed.");
    return e;
  }
}
class Sr {
  _pointer;
  _bytes;
  _func;
  constructor(n, e, u) {
    this._pointer = n, this._func = u, this._bytes = _._api.HEAPU8.subarray(n, n + e);
  }
  func(n) {
    return n._bytes === void 0 ? n._func(new Uint8Array()) : n._func(n._bytes);
  }
  dispose() {
    this._pointer = _._api._MagickMemory_Relinquish(this._pointer);
  }
}
class Ye {
  disposeMethod;
  instance;
  /** @internal */
  constructor(n, e) {
    this.instance = n, this.disposeMethod = e;
  }
  /** @internal */
  get _instance() {
    if (this.instance > 0)
      return this.instance;
    throw this.instance === -1 && this._instanceNotInitialized(), new K("instance is disposed");
  }
  /** @internal */
  set _instance(n) {
    this.disposeInstance(this.instance), this.instance = n;
  }
  dispose() {
    this.instance = this.disposeInstance(this.instance);
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new K("instance is not initialized");
  }
  /** @internal */
  _setInstance(n, e) {
    return e.check(() => this.instance === 0 ? !1 : (this.dispose(), this.instance = n, !0), () => (this.disposeInstance(n), !0));
  }
  disposeInstance(n) {
    return n > 0 && (this.onDispose !== void 0 && this.onDispose(), this.disposeMethod(n)), 0;
  }
}
class du extends Ye {
  constructor(n) {
    const e = _._api._DrawingSettings_Create(), u = _._api._DrawingSettings_Dispose;
    if (super(e, u), n.fillColor !== void 0 && n.fillColor._use((c) => {
      _._api._DrawingSettings_FillColor_Set(this._instance, c);
    }), n.font !== void 0) {
      const c = be._getFontFileName(n.font);
      E(c, (p) => {
        _._api._DrawingSettings_Font_Set(this._instance, p);
      });
    }
    n.fontPointsize !== void 0 && _._api._DrawingSettings_FontPointsize_Set(this._instance, n.fontPointsize), n.strokeColor !== void 0 && n.strokeColor._use((c) => {
      _._api._DrawingSettings_StrokeColor_Set(this._instance, c);
    }), n.strokeWidth !== void 0 && _._api._DrawingSettings_StrokeWidth_Set(this._instance, n.strokeWidth);
  }
}
class ln {
  backgroundColor;
  fillColor;
  font;
  fontPointsize;
  strokeColor;
  strokeWidth;
  static _create(n) {
    const e = new ln();
    return e.fillColor = n.fillColor, e.font = n.font, e.fontPointsize = n.fontPointsize, e.strokeColor = n.strokeColor, e.strokeWidth = n.strokeWidth, e;
  }
  _use(n) {
    const e = new du(this);
    return ce._disposeAfterExecution(e, n);
  }
}
class kr {
  instance;
  type;
  constructor(n, e) {
    this.instance = _._api._malloc(n), this.type = e, _._api.setValue(this.instance, 0, this.type);
  }
  get ptr() {
    return this.instance;
  }
  get value() {
    return _._api.getValue(this.instance, this.type);
  }
}
class Ge extends kr {
  constructor() {
    super(4, "i32");
  }
  static use(n) {
    const e = new Ge();
    try {
      return n(e);
    } finally {
      _._api._free(e.ptr);
    }
  }
}
class A {
  pointer;
  constructor(n) {
    this.pointer = n;
  }
  get ptr() {
    return this.pointer.ptr;
  }
  check(n, e) {
    return this.isError() ? e() : n();
  }
  static usePointer(n, e) {
    return Ge.use((u) => {
      const c = n(u.ptr);
      return A.checkException(u, c, e);
    });
  }
  static use(n, e) {
    return Ge.use((u) => {
      const c = n(new A(u));
      return A.checkException(u, c, e);
    });
  }
  static checkException(n, e, u) {
    if (!A.isRaised(n))
      return e;
    const c = A.getErrorSeverity(n.value);
    if (c >= xt.Error)
      A.throw(n, c);
    else if (u !== void 0) {
      const p = A.createError(n.value, c);
      u(p);
    } else
      A.dispose(n);
    return e;
  }
  isError() {
    return A.isRaised(this.pointer) ? A.getErrorSeverity(this.pointer.value) >= xt.Error : !1;
  }
  static getErrorSeverity(n) {
    return _._api._MagickExceptionHelper_Severity(n);
  }
  static isRaised(n) {
    return n.value !== 0;
  }
  static throw(n, e) {
    const u = A.createError(n.value, e);
    throw A.dispose(n), u;
  }
  static createError(n, e) {
    const u = A.getMessage(n), c = new K(u, e), p = _._api._MagickExceptionHelper_RelatedCount(n);
    if (p === 0)
      return c;
    const h = [];
    for (let S = 0; S < p; S++) {
      const b = _._api._MagickExceptionHelper_Related(n, S), T = A.getErrorSeverity(b), B = A.createError(b, T);
      h.push(B);
    }
    return c._setRelatedErrors(h), c;
  }
  static getMessage(n) {
    const e = _._api._MagickExceptionHelper_Message(n), u = _._api._MagickExceptionHelper_Description(n);
    let c = me(e);
    return u !== 0 && (c += `(${_._api.UTF8ToString(u)})`), c;
  }
  static dispose(n) {
    _._api._MagickExceptionHelper_Dispose(n.value);
  }
}
class cn {
  constructor(n, e, u, c, p, h, S) {
    this.ascent = n, this.descent = e, this.maxHorizontalAdvance = u, this.textHeight = c, this.textWidth = p, this.underlinePosition = h, this.underlineThickness = S;
  }
  /**
   * Gets the ascent, the distance in pixels from the text baseline to the highest/upper grid coordinate
   * used to place an outline point.
   */
  ascent;
  /**
   * Gets the descent, the distance in pixels from the baseline to the lowest grid coordinate used to
   * place an outline point. Always a negative value.
   */
  descent;
  /**
   * Gets the maximum horizontal advance in pixels.
   */
  maxHorizontalAdvance;
  /**
   * Gets the text height in pixels.
   */
  textHeight;
  /**
   * Gets the text width in pixels.
   */
  textWidth;
  /**
   * Gets the underline position.
   */
  underlinePosition;
  /**
   * Gets the underline thickness.
   */
  underlineThickness;
  /** @internal */
  static _create(n) {
    if (n == 0)
      return null;
    try {
      const e = _._api._TypeMetric_Ascent_Get(n), u = _._api._TypeMetric_Descent_Get(n), c = _._api._TypeMetric_MaxHorizontalAdvance_Get(n), p = _._api._TypeMetric_TextHeight_Get(n), h = _._api._TypeMetric_TextWidth_Get(n), S = _._api._TypeMetric_UnderlinePosition_Get(n), b = _._api._TypeMetric_UnderlineThickness_Get(n);
      return new cn(e, u, c, p, h, S, b);
    } finally {
      _._api._TypeMetric_Dispose(n);
    }
  }
}
class zt extends Ye {
  constructor(n, e) {
    const c = ln._create(e)._use((h) => _._api._DrawingWand_Create(n._instance, h._instance)), p = _._api._DrawingWand_Dispose;
    super(c, p);
  }
  color(n, e, u) {
    A.usePointer((c) => {
      _._api._DrawingWand_Color(this._instance, n, e, u, c);
    });
  }
  draw(n) {
    n.forEach((e) => {
      e.draw(this);
    }), A.usePointer((e) => {
      _._api._DrawingWand_Render(this._instance, e);
    });
  }
  fillColor(n) {
    A.usePointer((e) => {
      n._use((u) => {
        _._api._DrawingWand_FillColor(this._instance, u, e);
      });
    });
  }
  fillOpacity(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_FillOpacity(this._instance, n, e);
    });
  }
  font(n) {
    A.usePointer((e) => {
      E(n, (u) => {
        _._api._DrawingWand_Font(this._instance, u, e);
      });
    });
  }
  fontPointSize(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_FontPointSize(this._instance, n, e);
    });
  }
  /** @internal */
  fontTypeMetrics(n, e) {
    return A.usePointer((u) => E(n, (c) => {
      const p = _._api._DrawingWand_FontTypeMetrics(this._instance, c, e ? 1 : 0, u);
      return cn._create(p);
    }));
  }
  gravity(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_Gravity(this._instance, n, e);
    });
  }
  line(n, e, u, c) {
    A.usePointer((p) => {
      _._api._DrawingWand_Line(this._instance, n, e, u, c, p);
    });
  }
  point(n, e) {
    A.usePointer((u) => {
      _._api._DrawingWand_Point(this._instance, n, e, u);
    });
  }
  rectangle(n, e, u, c) {
    A.usePointer((p) => {
      _._api._DrawingWand_Rectangle(this._instance, n, e, u, c, p);
    });
  }
  roundRectangle(n, e, u, c, p, h) {
    A.usePointer((S) => {
      _._api._DrawingWand_RoundRectangle(this._instance, n, e, u, c, p, h, S);
    });
  }
  strokeColor(n) {
    A.usePointer((e) => {
      n._use((u) => {
        _._api._DrawingWand_StrokeColor(this._instance, u, e);
      });
    });
  }
  strokeWidth(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_StrokeWidth(this._instance, n, e);
    });
  }
  text(n, e, u) {
    A.usePointer((c) => {
      E(u, (p) => {
        _._api._DrawingWand_Text(this._instance, n, e, p, c);
      });
    });
  }
  textAlignment(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextAlignment(this._instance, n, e);
    });
  }
  textAntialias(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextAntialias(this._instance, n ? 1 : 0, e);
    });
  }
  textDecoration(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextDecoration(this._instance, n, e);
    });
  }
  textInterlineSpacing(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextInterlineSpacing(this._instance, n, e);
    });
  }
  textInterwordspacing(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextInterwordSpacing(this._instance, n, e);
    });
  }
  textKerning(n) {
    A.usePointer((e) => {
      _._api._DrawingWand_TextKerning(this._instance, n, e);
    });
  }
  textUnderColor(n) {
    A.usePointer((e) => {
      n._use((u) => {
        _._api._DrawingWand_TextUnderColor(this._instance, u, e);
      });
    });
  }
  /** @internal */
  static _use(n, e) {
    const u = new zt(n, n.settings);
    return ce._disposeAfterExecution(u, e);
  }
}
class gn extends kr {
  constructor() {
    super(8, "double");
  }
  static use(n) {
    const e = new gn();
    try {
      return n(e);
    } finally {
      _._api._free(e.ptr);
    }
  }
}
var Lt = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Forget = 0] = "Forget", t[t.Northwest = 1] = "Northwest", t[t.North = 2] = "North", t[t.Northeast = 3] = "Northeast", t[t.West = 4] = "West", t[t.Center = 5] = "Center", t[t.East = 6] = "East", t[t.Southwest = 7] = "Southwest", t[t.South = 8] = "South", t[t.Southeast = 9] = "Southeast", t))(Lt || {});
function* yu(t) {
  for (const n of t)
    switch (n) {
      case 2:
        yield "north";
        break;
      case 3:
        yield "north", yield "east";
        break;
      case 1:
        yield "north", yield "west";
        break;
      case 6:
        yield "east";
        break;
      case 4:
        yield "west";
        break;
      case 8:
        yield "south";
        break;
      case 9:
        yield "south", yield "east";
        break;
      case 7:
        yield "south", yield "west";
    }
}
class Nt {
  constructor(n, e, u) {
    this.meanErrorPerPixel = n, this.normalizedMeanError = e, this.normalizedMaximumError = u;
  }
  /**
   * Gets the mean error per pixel computed when an image is color reduced.
   */
  meanErrorPerPixel;
  /**
   * Gets the normalized maximum error per pixel computed when an image is color reduced.
   */
  normalizedMaximumError;
  /**
   * Gets the normalized mean error per pixel computed when an image is color reduced.
   */
  normalizedMeanError;
  /** @internal */
  static _create(n) {
    const e = _._api._MagickImage_MeanErrorPerPixel_Get(n._instance), u = _._api._MagickImage_NormalizedMeanError_Get(n._instance), c = _._api._MagickImage_NormalizedMaximumError_Get(n._instance);
    return new Nt(e, u, c);
  }
}
var Pe = /* @__PURE__ */ ((t) => (t.Unknown = "UNKNOWN", t.ThreeFr = "3FR", t.ThreeG2 = "3G2", t.ThreeGp = "3GP", t.A = "A", t.Aai = "AAI", t.Ai = "AI", t.APng = "APNG", t.Art = "ART", t.Arw = "ARW", t.Ashlar = "ASHLAR", t.Avi = "AVI", t.Avif = "AVIF", t.Avs = "AVS", t.B = "B", t.Bayer = "BAYER", t.Bayera = "BAYERA", t.Bgr = "BGR", t.Bgra = "BGRA", t.Bgro = "BGRO", t.Bmp = "BMP", t.Bmp2 = "BMP2", t.Bmp3 = "BMP3", t.Brf = "BRF", t.C = "C", t.Cal = "CAL", t.Cals = "CALS", t.Canvas = "CANVAS", t.Caption = "CAPTION", t.Cin = "CIN", t.Cip = "CIP", t.Clip = "CLIP", t.Cmyk = "CMYK", t.Cmyka = "CMYKA", t.Cr2 = "CR2", t.Cr3 = "CR3", t.Crw = "CRW", t.Cube = "CUBE", t.Cur = "CUR", t.Cut = "CUT", t.Data = "DATA", t.Dcm = "DCM", t.Dcr = "DCR", t.Dcraw = "DCRAW", t.Dcx = "DCX", t.Dds = "DDS", t.Dfont = "DFONT", t.Dng = "DNG", t.Dpx = "DPX", t.Dxt1 = "DXT1", t.Dxt5 = "DXT5", t.Epdf = "EPDF", t.Epi = "EPI", t.Eps = "EPS", t.Eps2 = "EPS2", t.Eps3 = "EPS3", t.Epsf = "EPSF", t.Epsi = "EPSI", t.Ept = "EPT", t.Ept2 = "EPT2", t.Ept3 = "EPT3", t.Erf = "ERF", t.Exr = "EXR", t.Farbfeld = "FARBFELD", t.Fax = "FAX", t.Ff = "FF", t.Fff = "FFF", t.File = "FILE", t.Fits = "FITS", t.Fl32 = "FL32", t.Flv = "FLV", t.Fractal = "FRACTAL", t.Ftp = "FTP", t.Fts = "FTS", t.Ftxt = "FTXT", t.G = "G", t.G3 = "G3", t.G4 = "G4", t.Gif = "GIF", t.Gif87 = "GIF87", t.Gradient = "GRADIENT", t.Gray = "GRAY", t.Graya = "GRAYA", t.Group4 = "GROUP4", t.Hald = "HALD", t.Hdr = "HDR", t.Heic = "HEIC", t.Heif = "HEIF", t.Histogram = "HISTOGRAM", t.Hrz = "HRZ", t.Htm = "HTM", t.Html = "HTML", t.Http = "HTTP", t.Https = "HTTPS", t.Icb = "ICB", t.Ico = "ICO", t.Icon = "ICON", t.Iiq = "IIQ", t.Info = "INFO", t.Inline = "INLINE", t.Ipl = "IPL", t.Isobrl = "ISOBRL", t.Isobrl6 = "ISOBRL6", t.J2c = "J2C", t.J2k = "J2K", t.Jng = "JNG", t.Jnx = "JNX", t.Jp2 = "JP2", t.Jpc = "JPC", t.Jpe = "JPE", t.Jpeg = "JPEG", t.Jpg = "JPG", t.Jpm = "JPM", t.Jps = "JPS", t.Jpt = "JPT", t.Json = "JSON", t.Jxl = "JXL", t.K = "K", t.K25 = "K25", t.Kdc = "KDC", t.Label = "LABEL", t.M = "M", t.M2v = "M2V", t.M4v = "M4V", t.Mac = "MAC", t.Map = "MAP", t.Mask = "MASK", t.Mat = "MAT", t.Matte = "MATTE", t.Mdc = "MDC", t.Mef = "MEF", t.Miff = "MIFF", t.Mkv = "MKV", t.Mng = "MNG", t.Mono = "MONO", t.Mov = "MOV", t.Mos = "MOS", t.Mp4 = "MP4", t.Mpc = "MPC", t.Mpeg = "MPEG", t.Mpg = "MPG", t.Mpo = "MPO", t.Mrw = "MRW", t.Msl = "MSL", t.Msvg = "MSVG", t.Mtv = "MTV", t.Mvg = "MVG", t.Nef = "NEF", t.Nrw = "NRW", t.Null = "NULL", t.O = "O", t.Ora = "ORA", t.Orf = "ORF", t.Otb = "OTB", t.Otf = "OTF", t.Pal = "PAL", t.Palm = "PALM", t.Pam = "PAM", t.Pango = "PANGO", t.Pattern = "PATTERN", t.Pbm = "PBM", t.Pcd = "PCD", t.Pcds = "PCDS", t.Pcl = "PCL", t.Pct = "PCT", t.Pcx = "PCX", t.Pdb = "PDB", t.Pdf = "PDF", t.Pdfa = "PDFA", t.Pef = "PEF", t.Pes = "PES", t.Pfa = "PFA", t.Pfb = "PFB", t.Pfm = "PFM", t.Pgm = "PGM", t.Pgx = "PGX", t.Phm = "PHM", t.Picon = "PICON", t.Pict = "PICT", t.Pix = "PIX", t.Pjpeg = "PJPEG", t.Plasma = "PLASMA", t.Png = "PNG", t.Png00 = "PNG00", t.Png24 = "PNG24", t.Png32 = "PNG32", t.Png48 = "PNG48", t.Png64 = "PNG64", t.Png8 = "PNG8", t.Pnm = "PNM", t.Pocketmod = "POCKETMOD", t.Ppm = "PPM", t.Ps = "PS", t.Ps2 = "PS2", t.Ps3 = "PS3", t.Psb = "PSB", t.Psd = "PSD", t.Ptif = "PTIF", t.Pwp = "PWP", t.Qoi = "QOI", t.R = "R", t.RadialGradient = "RADIAL-GRADIENT", t.Raf = "RAF", t.Ras = "RAS", t.Raw = "RAW", t.Rgb = "RGB", t.Rgb565 = "RGB565", t.Rgba = "RGBA", t.Rgbo = "RGBO", t.Rgf = "RGF", t.Rla = "RLA", t.Rle = "RLE", t.Rmf = "RMF", t.Rw2 = "RW2", t.Rwl = "RWL", t.Scr = "SCR", t.Screenshot = "SCREENSHOT", t.Sct = "SCT", t.Sfw = "SFW", t.Sgi = "SGI", t.Shtml = "SHTML", t.Six = "SIX", t.Sixel = "SIXEL", t.SparseColor = "SPARSE-COLOR", t.Sr2 = "SR2", t.Srf = "SRF", t.Srw = "SRW", t.Stegano = "STEGANO", t.Sti = "STI", t.StrImg = "STRIMG", t.Sun = "SUN", t.Svg = "SVG", t.Svgz = "SVGZ", t.Text = "TEXT", t.Tga = "TGA", t.Thumbnail = "THUMBNAIL", t.Tif = "TIF", t.Tiff = "TIFF", t.Tiff64 = "TIFF64", t.Tile = "TILE", t.Tim = "TIM", t.Tm2 = "TM2", t.Ttc = "TTC", t.Ttf = "TTF", t.Txt = "TXT", t.Ubrl = "UBRL", t.Ubrl6 = "UBRL6", t.Uil = "UIL", t.Uyvy = "UYVY", t.Vda = "VDA", t.Vicar = "VICAR", t.Vid = "VID", t.Viff = "VIFF", t.Vips = "VIPS", t.Vst = "VST", t.WebM = "WEBM", t.WebP = "WEBP", t.Wbmp = "WBMP", t.Wmv = "WMV", t.Wpg = "WPG", t.X3f = "X3F", t.Xbm = "XBM", t.Xc = "XC", t.Xcf = "XCF", t.Xpm = "XPM", t.Xps = "XPS", t.Xv = "XV", t.Y = "Y", t.Yaml = "YAML", t.Ycbcr = "YCBCR", t.Ycbcra = "YCBCRA", t.Yuv = "YUV", t))(Pe || {}), ht = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Coalesce = 1] = "Coalesce", t[t.CompareAny = 2] = "CompareAny", t[t.CompareClear = 3] = "CompareClear", t[t.CompareOverlay = 4] = "CompareOverlay", t[t.Dispose = 5] = "Dispose", t[t.Optimize = 6] = "Optimize", t[t.OptimizeImage = 7] = "OptimizeImage", t[t.OptimizePlus = 8] = "OptimizePlus", t[t.OptimizeTrans = 9] = "OptimizeTrans", t[t.RemoveDups = 10] = "RemoveDups", t[t.RemoveZero = 11] = "RemoveZero", t[t.Composite = 12] = "Composite", t[t.Merge = 13] = "Merge", t[t.Flatten = 14] = "Flatten", t[t.Mosaic = 15] = "Mosaic", t[t.Trimbounds = 16] = "Trimbounds", t))(ht || {});
class vr extends Ye {
  constructor(n) {
    const e = _._api._MagickSettings_Create(), u = _._api._MagickSettings_Dispose;
    if (super(e, u), n._fileName !== void 0 && E(n._fileName, (c) => {
      _._api._MagickSettings_SetFileName(this._instance, c);
    }), n._ping && _._api._MagickSettings_SetPing(this._instance, 1), n._quality !== void 0 && _._api._MagickSettings_SetQuality(this._instance, n._quality), n.antiAlias !== void 0 && _._api._MagickSettings_AntiAlias_Set(this._instance, n.antiAlias ? 1 : 0), n.backgroundColor !== void 0 && n.backgroundColor._use((c) => {
      _._api._MagickSettings_BackgroundColor_Set(this._instance, c);
    }), n.colorSpace !== void 0 && _._api._MagickSettings_ColorSpace_Set(this._instance, n.colorSpace), n.colorType !== void 0 && _._api._MagickSettings_ColorType_Set(this._instance, n.colorType), n.compression !== void 0 && _._api._MagickSettings_Compression_Set(this._instance, n.compression), n.debug !== void 0 && _._api._MagickSettings_Debug_Set(this._instance, n.debug ? 1 : 0), n.density !== void 0) {
      const c = n.density.toString();
      E(c, (p) => {
        _._api._MagickSettings_Density_Set(this._instance, p);
      });
    }
    if (n.depth !== void 0 && _._api._MagickSettings_Depth_Set(this._instance, n.depth), n.endian !== void 0 && _._api._MagickSettings_Endian_Set(this._instance, n.endian), n.fillColor !== void 0 && this.setOption("fill", n.fillColor.toString()), n.font !== void 0) {
      const c = be._getFontFileName(n.font);
      E(c, (p) => {
        _._api._MagickSettings_SetFont(this._instance, p);
      });
    }
    n.fontPointsize !== void 0 && _._api._MagickSettings_FontPointsize_Set(this._instance, n.fontPointsize), n.format !== void 0 && E(n.format, (c) => {
      _._api._MagickSettings_Format_Set(this._instance, c);
    }), n.interlace !== void 0 && _._api._MagickSettings_Interlace_Set(this._instance, n.interlace), n.strokeColor !== void 0 && this.setOption("stroke", n.strokeColor.toString()), n.strokeWidth !== void 0 && this.setOption("strokeWidth", n.strokeWidth.toString()), n.textInterlineSpacing !== void 0 && this.setOption("interline-spacing", n.textInterlineSpacing.toString()), n.textKerning !== void 0 && this.setOption("kerning", n.textKerning.toString());
    for (const c in n._options)
      this.setOption(c, n._options[c]);
  }
  setOption(n, e) {
    E(n, (u) => {
      E(e, (c) => {
        _._api._MagickSettings_SetOption(this._instance, u, c);
      });
    });
  }
}
class dt {
  /** @internal */
  _options = {};
  /** @internal */
  _fileName;
  /** @internal */
  _ping = !1;
  /** @internal */
  _quality;
  /**
   * Gets or sets a value indicating whether anti-aliasing should be enabled (default true).
   */
  antiAlias;
  /**
   * Gets or sets the background color.
   */
  backgroundColor;
  /**
   * Gets or sets the color space.
   */
  colorSpace;
  /**
   * Gets or sets the color type of the image.
   */
  colorType;
  /**
   * Gets or sets the compression method to use.
   */
  compression;
  /**
   * Gets or sets a value indicating whether printing of debug messages from ImageMagick is enabled when a debugger is attached.
   */
  debug;
  /**
   * Gets or sets the vertical and horizontal resolution in pixels.
   */
  density;
  /**
   * Gets or sets the depth (bits allocated to red/green/blue components).
   */
  depth;
  /**
   * Gets or sets the endianness (little like Intel or big like SPARC) for image formats which support
   * endian-specific options.
   */
  endian;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the text rendering font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the the format of the image.
   */
  format;
  /**
   * Gets or sets the interlace method.
   */
  interlace;
  /**
   * Gets or sets the color to use when drawing object outlines.
   */
  strokeColor;
  /**
   * Gets or sets the stroke width for drawing lines, circles, ellipses, etc.
   */
  strokeWidth;
  /**
   * Gets or sets the text inter-line spacing.
   */
  textInterlineSpacing;
  /**
   * Gets or sets the text inter-character kerning.
   */
  textKerning;
  getDefine(n, e) {
    return e !== void 0 ? this._options[`${n}:${e}`] ?? null : this._options[n] ?? null;
  }
  setDefine(n, e, u) {
    if (u === void 0)
      this._options[n] = e;
    else {
      const c = this.parseDefine(n, e);
      typeof u == "string" ? this._options[c] = u : typeof u == "number" ? this._options[c] = u.toString() : this._options[c] = u ? "true" : "false";
    }
  }
  /**
   * Sets format-specific options with the specified defines.
   */
  setDefines(n) {
    n.getDefines().forEach((e) => {
      e !== void 0 && this.setDefine(e.format, e.name, e.value);
    });
  }
  /** @internal */
  _clone() {
    const n = new dt();
    return Object.assign(n, this), n;
  }
  /** @internal */
  _use(n) {
    const e = new vr(this);
    return ce._disposeAfterExecution(e, n);
  }
  parseDefine(n, e) {
    return n === Pe.Unknown ? e : `${n}:${e}`;
  }
}
class De extends dt {
  constructor(n) {
    super(), Object.assign(this, n);
  }
  /**
   * Gets or sets the specified area to extract from the image.
   */
  extractArea;
  /**
   * Gets or sets the index of the image to read from a multi layer/frame image.
   */
  frameIndex;
  /**
   * Gets or sets the number of images to read from a multi layer/frame image.
   */
  frameCount;
  /**
   * Gets or sets the height.
   */
  height;
  /**
   * Gets or sets a value indicating whether the exif profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithExifProfile() {
    const n = this.getDefine("exif:sync-image");
    return n === null ? !0 : n.toLowerCase() === "true";
  }
  set syncImageWithExifProfile(n) {
    this.setDefine("exif:sync-image", n.toString());
  }
  /**
   * Gets or sets a value indicating whether the tiff profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithTiffProperties() {
    const n = this.getDefine("tiff:sync-image");
    return n === null ? !0 : n.toLowerCase() === "true";
  }
  set syncImageWithTiffProperties(n) {
    this.setDefine("tiff:sync-image", n.toString());
  }
  /**
   * Gets or sets the width.
   */
  width;
  /** @internal */
  _use(n) {
    const e = new vr(this), u = this.getSize();
    if (u !== "" && E(u, (c) => {
      _._api._MagickSettings_SetSize(e._instance, c);
    }), this.frameIndex !== void 0 || this.frameCount !== void 0) {
      const c = this.frameIndex ?? 0, p = this.frameCount ?? 1;
      _._api._MagickSettings_SetScene(e._instance, c), _._api._MagickSettings_SetNumberScenes(e._instance, p);
      const h = this.frameCount !== void 0 ? `${c}-${c + p}` : c.toString();
      E(h.toString(), (S) => {
        _._api._MagickSettings_SetScenes(e._instance, S);
      });
    }
    return this.extractArea !== void 0 && E(this.extractArea.toString(), (c) => {
      _._api._MagickSettings_Extract_Set(e._instance, c);
    }), ce._disposeAfterExecution(e, n);
  }
  getSize() {
    return this.width !== void 0 && this.height !== void 0 ? `${this.width}x${this.height}` : this.width !== void 0 ? `${this.width}x` : this.height !== void 0 ? `x${this.height}` : "";
  }
}
var mn = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.No = 1] = "No", t[t.Riemersma = 2] = "Riemersma", t[t.FloydSteinberg = 3] = "FloydSteinberg", t))(mn || {});
class wu extends Ye {
  constructor(n) {
    const e = _._api._QuantizeSettings_Create(), u = _._api._QuantizeSettings_Dispose;
    super(e, u), _._api._QuantizeSettings_SetColors(this._instance, n.colors), _._api._QuantizeSettings_SetColorSpace(this._instance, n.colorSpace), _._api._QuantizeSettings_SetDitherMethod(this._instance, n.ditherMethod ?? mn.No), _._api._QuantizeSettings_SetMeasureErrors(this._instance, n.measureErrors ? 1 : 0), _._api._QuantizeSettings_SetTreeDepth(this._instance, n.treeDepth);
  }
}
class an {
  constructor() {
    this.colors = 256, this.colorSpace = ne.Undefined, this.ditherMethod = mn.Riemersma, this.measureErrors = !1, this.treeDepth = 0;
  }
  /**
   * Gets or sets the maximum number of colors to quantize to.
   */
  colors;
  /**
   * Gets or sets the colorspace to quantize in.
   */
  colorSpace;
  /// <summary>
  /// Gets or sets the dither method to use.
  /// </summary>
  ditherMethod;
  /// <summary>
  /// Gets or sets a value indicating whether errors should be measured.
  /// </summary>
  measureErrors;
  /// <summary>
  /// Gets or sets the quantization tree-depth.
  /// </summary>
  treeDepth;
  /** @internal */
  _use(n) {
    const e = new wu(this);
    return ce._disposeAfterExecution(e, n);
  }
}
class Ue {
  _image;
  _names = [];
  constructor(n) {
    this._image = n;
  }
  setArtifact(n, e) {
    this._names.push(n), this._image.setArtifact(n, e);
  }
  static use(n, e) {
    const u = new Ue(n);
    try {
      return e(u);
    } finally {
      u.dispose();
    }
  }
  dispose() {
    for (const n of this._names)
      this._image.removeArtifact(n);
  }
}
function fr(t, n) {
  if (t.byteLength === 0)
    throw new K("The specified array cannot be empty");
  let e = 0;
  try {
    return e = _._api._malloc(t.byteLength), _._api.HEAPU8.set(t, e), n(e);
  } finally {
    e !== 0 && _._api._free(e);
  }
}
function Ir(t, n) {
  if (t.length === 0)
    throw new K("The specified array cannot be empty");
  const e = t.length * 8;
  let u = 0;
  try {
    u = _._api._malloc(e);
    const c = new ArrayBuffer(e), p = new Float64Array(c);
    for (let h = 0; h < t.length; h++)
      p[h] = t[h];
    return _._api.HEAPU8.set(new Int8Array(c), u), n(u);
  } finally {
    u !== 0 && _._api._free(u);
  }
}
function Su(t, n) {
  if (t.byteLength === 0)
    throw new K("The specified array cannot be empty");
  let e = 0;
  try {
    return e = _._api._malloc(t.byteLength), _._api.HEAPU8.set(t, e), n(e);
  } finally {
    e !== 0 && _._api._free(e);
  }
}
class Me extends Array {
  constructor() {
    super();
  }
  static create(n) {
    const e = Me.createObject();
    return n !== void 0 && e.read(n), e;
  }
  dispose() {
    let n = this.pop();
    for (; n !== void 0; )
      n.dispose(), n = this.pop();
  }
  appendHorizontally(n) {
    return this.createImage((e, u) => _._api._MagickImageCollection_Append(e, 0, u.ptr), n);
  }
  appendVertically(n) {
    return this.createImage((e, u) => _._api._MagickImageCollection_Append(e, 1, u.ptr), n);
  }
  clone(n) {
    const e = Me.create();
    for (let u = 0; u < this.length; u++)
      e.push(re._clone(this[u]));
    return e._use(n);
  }
  coalesce() {
    this.replaceImages((n, e) => _._api._MagickImageCollection_Coalesce(n, e.ptr));
  }
  combine(n, e) {
    let u = e, c = ne.sRGB;
    return typeof n == "number" ? c = n : u = n, this.createImage((p, h) => _._api._MagickImageCollection_Combine(p, c, h.ptr), u);
  }
  complex(n, e) {
    return Ue.use(this[0], (u) => (n._setArtifacts(u), this.createImage((c, p) => _._api._MagickImageCollection_Complex(c, n.complexOperator, p.ptr), e)));
  }
  deconstruct() {
    this.replaceImages((n, e) => _._api._MagickImageCollection_Deconstruct(n, e.ptr));
  }
  evaluate(n, e) {
    return this.createImage((u, c) => _._api._MagickImageCollection_Evaluate(u, n, c.ptr), e);
  }
  flatten(n) {
    return this.mergeImages(ht.Flatten, n);
  }
  fx(n, e, u) {
    this.throwIfEmpty();
    let c = J.All, p = u;
    return typeof e == "number" ? c = e : p = e, E(n, (h) => this.createImage((S, b) => _._api._MagickImageCollection_Fx(S, h, c, b.ptr), p));
  }
  merge(n) {
    return this.mergeImages(ht.Merge, n);
  }
  montage(n, e) {
    return this.throwIfEmpty(), this.attachImages((u) => {
      const c = n._use((p) => A.use((h) => {
        const S = _._api._MagickImageCollection_Montage(u, p._instance, h.ptr);
        return this.checkResult(S, h);
      }));
      return Me._createFromImages(c, this.getSettings())._use((p) => {
        const h = n.transparentColor;
        return h !== void 0 && p.forEach((S) => {
          S.transparent(h);
        }), p.merge(e);
      });
    });
  }
  morph(n) {
    if (this.length < 2)
      throw new K("operation requires at least two images");
    this.replaceImages((e, u) => _._api._MagickImageCollection_Morph(e, n, u.ptr));
  }
  mosaic(n) {
    return this.mergeImages(ht.Mosaic, n);
  }
  optimize() {
    this.replaceImages((n, e) => _._api._MagickImageCollection_Optimize(n, e.ptr));
  }
  optimizePlus() {
    this.replaceImages((n, e) => _._api._MagickImageCollection_OptimizePlus(n, e.ptr));
  }
  optimizeTransparency() {
    this.throwIfEmpty(), this.attachImages((n) => {
      A.usePointer((e) => {
        _._api._MagickImageCollection_OptimizeTransparency(n, e);
      });
    });
  }
  ping(n, e) {
    this.readOrPing(!0, n, e);
  }
  polynomial(n, e) {
    return this.createImage((u, c) => Ir(n, (p) => _._api._MagickImageCollection_Polynomial(u, p, n.length, c.ptr)), e);
  }
  quantize(n) {
    this.throwIfEmpty();
    const e = n === void 0 ? new an() : n;
    return this.attachImages((u) => {
      e._use((c) => {
        A.usePointer((p) => {
          _._api._MagickImageCollection_Quantize(u, c._instance, p);
        });
      });
    }), e.measureErrors ? Nt._create(this[0]) : null;
  }
  read(n, e) {
    this.readOrPing(!1, n, e);
  }
  remap(n, e) {
    this.throwIfEmpty();
    const u = e === void 0 ? new an() : e;
    this.attachImages((c) => {
      u._use((p) => {
        A.use((h) => {
          _._api._MagickImageCollection_Remap(c, p._instance, n._instance, h.ptr);
        });
      });
    });
  }
  resetPage() {
    this.forEach((n) => {
      n.resetPage();
    });
  }
  smushHorizontal(n, e) {
    return this.smush(n, !1, e);
  }
  smushVertical(n, e) {
    return this.smush(n, !0, e);
  }
  trimBounds() {
    this.mergeImages(ht.Trimbounds, () => {
    });
  }
  write(n, e) {
    this.throwIfEmpty();
    let u = 0, c = 0;
    const p = this[0], h = this.getSettings();
    e !== void 0 ? h.format = n : (e = n, h.format = p.format), A.use((b) => {
      Ge.use((T) => {
        h._use((B) => {
          this.attachImages((ae) => {
            u = _._api._MagickImage_WriteBlob(ae, B._instance, T.ptr, b.ptr), c = T.value;
          });
        });
      });
    });
    const S = new Sr(u, c, e);
    return ce._disposeAfterExecution(S, S.func);
  }
  /** @internal */
  static _createFromImages(n, e) {
    const u = Me.createObject();
    return u.addImages(n, e._clone()), u;
  }
  _use(n) {
    return ce._disposeAfterExecution(this, n);
  }
  addImages(n, e) {
    e.format = Pe.Unknown;
    let u = n;
    for (; u !== 0; ) {
      const c = _._api._MagickImage_GetNext(u);
      _._api._MagickImage_SetNext(u, 0), this.push(re._createFromImage(u, e)), u = c;
    }
  }
  attachImages(n) {
    try {
      for (let e = 0; e < this.length - 1; e++)
        _._api._MagickImage_SetNext(this[e]._instance, this[e + 1]._instance);
      return n(this[0]._instance);
    } finally {
      for (let e = 0; e < this.length - 1; e++)
        _._api._MagickImage_SetNext(this[e]._instance, 0);
    }
  }
  checkResult(n, e) {
    return e.check(() => n, () => (_._api._MagickImageCollection_Dispose(n), 0));
  }
  static createObject() {
    return Object.create(Me.prototype);
  }
  createImage(n, e) {
    this.throwIfEmpty();
    const u = this.attachImages((p) => A.use((h) => {
      const S = n(p, h);
      return this.checkResult(S, h);
    }));
    return re._createFromImage(u, this.getSettings())._use(e);
  }
  getSettings() {
    return this[0]._getSettings()._clone();
  }
  mergeImages(n, e) {
    return this.createImage((u, c) => _._api._MagickImageCollection_Merge(u, n, c.ptr), e);
  }
  readOrPing(n, e, u) {
    this.dispose(), A.use((c) => {
      const p = u === void 0 ? new De() : new De(u);
      p._ping = n, typeof e == "string" ? (p._fileName = e, p._use((h) => {
        const S = _._api._MagickImageCollection_ReadFile(h._instance, c.ptr);
        this.addImages(S, p);
      })) : p._use((h) => {
        const S = e.byteLength;
        let b = 0;
        try {
          b = _._api._malloc(S), _._api.HEAPU8.set(e, b);
          const T = _._api._MagickImageCollection_ReadBlob(h._instance, b, 0, S, c.ptr);
          this.addImages(T, p);
        } finally {
          b !== 0 && _._api._free(b);
        }
      });
    });
  }
  replaceImages(n) {
    this.throwIfEmpty();
    const e = this.attachImages((c) => A.use((p) => {
      const h = n(c, p);
      return this.checkResult(h, p);
    })), u = this.getSettings()._clone();
    this.dispose(), this.addImages(e, u);
  }
  smush(n, e, u) {
    return this.createImage((c, p) => _._api._MagickImageCollection_Smush(c, n, e ? 1 : 0, p.ptr), u);
  }
  throwIfEmpty() {
    if (this.length === 0)
      throw new K("operation requires at least one image");
  }
}
class se {
  _value;
  /**
   * Initializes a new instance of the {@link Percentage} class.
   * @param value -The value (0% = 0.0, 100% = 100.0)
   */
  constructor(n) {
    this._value = n;
  }
  /** @internal */
  static _fromQuantum(n) {
    return new se(n / $e.max * 100);
  }
  /**
   * ultiplies the value by the specified percentage.
   * @param value The value to use.
   * @returns The new value.
   */
  multiply(n) {
    return n * this._value / 100;
  }
  /**
   * Returns a double that represents the current percentage.
   * @returns A double that represents the current percentage.
   */
  toDouble() {
    return this._value;
  }
  /** @internal */
  _toQuantum() {
    return $e.max * (this._value / 100);
  }
}
class pr {
  static use(n, e, u) {
    const c = _._api._MagickRectangle_Create();
    try {
      _._api._MagickRectangle_X_Set(c, e.x), _._api._MagickRectangle_Y_Set(c, e.y);
      let p = e.width, h = e.height;
      return e.isPercentage && (p = new se(e.width).multiply(n.width), h = new se(e.height).multiply(n.height)), _._api._MagickRectangle_Width_Set(c, p), _._api._MagickRectangle_Height_Set(c, h), u(c);
    } finally {
      _._api._MagickRectangle_Dispose(c);
    }
  }
}
class Ze extends Ye {
  image;
  constructor(n) {
    const e = A.usePointer((c) => _._api._PixelCollection_Create(n._instance, c)), u = _._api._PixelCollection_Dispose;
    super(e, u), this.image = n;
  }
  /** @internal */
  static _create(n) {
    return new Ze(n);
  }
  static _use(n, e) {
    const u = new Ze(n);
    return ce._disposeAfterExecution(u, e);
  }
  /** @internal */
  static _map(n, e, u) {
    const c = new Ze(n);
    try {
      c.use(0, 0, n.width, n.height, e, (p) => {
        u(p);
      });
    } finally {
      c.dispose();
    }
  }
  getArea(n, e, u, c) {
    return A.usePointer((p) => {
      const h = _._api._PixelCollection_GetArea(this._instance, n, e, u, c, p), S = u * c * this.image.channelCount;
      return _._api.HEAPU8.subarray(h, h + S);
    });
  }
  getPixel(n, e) {
    return this.getArea(n, e, 1, 1);
  }
  setArea(n, e, u, c, p) {
    A.usePointer((h) => {
      const S = p instanceof Uint8Array ? p : new Uint8Array(p);
      Su(S, (b) => {
        _._api._PixelCollection_SetArea(this._instance, n, e, u, c, b, S.length, h);
      });
    });
  }
  setPixel(n, e, u) {
    u instanceof Uint8Array ? this.setArea(n, e, 1, 1, u) : this.setArea(n, e, 1, 1, u);
  }
  toByteArray(n, e, u, c, p) {
    return this.use(n, e, u, c, p, (h) => {
      if (h === 0)
        return null;
      const S = u * c * p.length;
      return _._api.HEAPU8.slice(h, h + S);
    });
  }
  use(n, e, u, c, p, h) {
    return E(p, (S) => A.use((b) => {
      let T = _._api._PixelCollection_ToByteArray(this._instance, n, e, u, c, S, b.ptr);
      return b.check(() => {
        const B = h(T);
        return T = _._api._MagickMemory_Relinquish(T), B;
      }, () => (T = _._api._MagickMemory_Relinquish(T), null));
    }));
  }
}
var Mr = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Average = 1] = "Average", t[t.Brightness = 2] = "Brightness", t[t.Lightness = 3] = "Lightness", t[t.MS = 4] = "MS", t[t.Rec601Luma = 5] = "Rec601Luma", t[t.Rec601Luminance = 6] = "Rec601Luminance", t[t.Rec709Luma = 7] = "Rec709Luma", t[t.Rec709Luminance = 8] = "Rec709Luminance", t[t.RMS = 9] = "RMS", t))(Mr || {});
class Fe {
  /**
   * Initializes a new instance of the {@link PrimaryInfo} class.
   * @param x The x,
   * @param y The y.
   * @param z The z.
   */
  constructor(n, e, u) {
    this.x = n, this.y = e, this.z = u;
  }
  /**
   * Gets the X value.
   */
  x;
  /**
   * Gets the Y value.
   */
  y;
  /**
   * Gets the Z value.
   */
  z;
  /** @internal */
  static _create(n) {
    return n === 0 ? new Fe(0, 0, 0) : new Fe(
      _._api._PrimaryInfo_X_Get(n),
      _._api._PrimaryInfo_Y_Get(n),
      _._api._PrimaryInfo_Z_Get(n)
    );
  }
  /** @internal */
  _use(n) {
    let e = 0;
    try {
      e = _._api._PrimaryInfo_Create(), _._api._PrimaryInfo_X_Set(e, this.x), _._api._PrimaryInfo_Y_Set(e, this.y), _._api._PrimaryInfo_Z_Set(e, this.z), n(e);
    } finally {
      _._api._free(e);
    }
  }
}
class ku {
  channel;
  depth;
  entropy;
  kurtosis;
  maximum;
  mean;
  minimum;
  skewness;
  standardDeviation;
  constructor(n, e) {
    this.channel = n, this.depth = _._api._ChannelStatistics_Depth_Get(e), this.entropy = _._api._ChannelStatistics_Entropy_Get(e), this.kurtosis = _._api._ChannelStatistics_Kurtosis_Get(e), this.maximum = _._api._ChannelStatistics_Maximum_Get(e), this.mean = _._api._ChannelStatistics_Mean_Get(e), this.minimum = _._api._ChannelStatistics_Minimum_Get(e), this.skewness = _._api._ChannelStatistics_Skewness_Get(e), this.standardDeviation = _._api._ChannelStatistics_StandardDeviation_Get(e);
  }
}
class fn {
  _channels = {};
  get channels() {
    const n = [];
    for (const e in this._channels)
      n.push(parseInt(e));
    return n;
  }
  composite() {
    return this._channels[$.Composite];
  }
  getChannel(n) {
    const e = this._channels[n];
    return e !== void 0 ? e : null;
  }
  static _create(n, e, u) {
    const c = new fn();
    return n.channels.forEach((p) => {
      u >> p & 1 && c.addChannel(e, p);
    }), c.addChannel(e, $.Composite), c;
  }
  addChannel(n, e) {
    const u = _._api._Statistics_GetInstance(n, e);
    u !== 0 && (this._channels[e] = new ku(e, u));
  }
}
class vu {
  static toArray(n) {
    if (n === 0)
      return null;
    const e = _._api._StringInfo_Datum_Get(n), u = _._api._StringInfo_Length_Get(n);
    return _._api.HEAPU8.subarray(e, e + u);
  }
}
class hr {
  /** @internal */
  constructor(n) {
    this.error = n;
  }
  /**
   * Gets the warning that was raised.
   */
  error;
}
class re extends Ye {
  _settings;
  _progress;
  _warning;
  constructor(n, e) {
    super(n, _._api._MagickImage_Dispose), this._settings = e;
  }
  get animationDelay() {
    return _._api._MagickImage_AnimationDelay_Get(this._instance);
  }
  set animationDelay(n) {
    _._api._MagickImage_AnimationDelay_Set(this._instance, n);
  }
  get animationIterations() {
    return _._api._MagickImage_AnimationIterations_Get(this._instance);
  }
  set animationIterations(n) {
    _._api._MagickImage_AnimationIterations_Set(this._instance, n);
  }
  get animationTicksPerSecond() {
    return _._api._MagickImage_AnimationTicksPerSecond_Get(this._instance);
  }
  set animationTicksPerSecond(n) {
    _._api._MagickImage_AnimationTicksPerSecond_Set(this._instance, n);
  }
  get artifactNames() {
    const n = [];
    _._api._MagickImage_ResetArtifactIterator(this._instance);
    let e = _._api._MagickImage_GetNextArtifactName(this._instance);
    for (; e !== 0; )
      n.push(_._api.UTF8ToString(e)), e = _._api._MagickImage_GetNextArtifactName(this._instance);
    return n;
  }
  get attributeNames() {
    const n = [];
    _._api._MagickImage_ResetAttributeIterator(this._instance);
    let e = _._api._MagickImage_GetNextAttributeName(this._instance);
    for (; e !== 0; )
      n.push(_._api.UTF8ToString(e)), e = _._api._MagickImage_GetNextAttributeName(this._instance);
    return n;
  }
  get backgroundColor() {
    const n = _._api._MagickImage_BackgroundColor_Get(this._instance);
    return w._create(n);
  }
  set backgroundColor(n) {
    n._use((e) => {
      _._api._MagickImage_BackgroundColor_Set(this._instance, e);
    });
  }
  get baseHeight() {
    return _._api._MagickImage_BaseHeight_Get(this._instance);
  }
  get baseWidth() {
    return _._api._MagickImage_BaseWidth_Get(this._instance);
  }
  get blackPointCompensation() {
    return _._api._MagickImage_BlackPointCompensation_Get(this._instance) === 1;
  }
  set blackPointCompensation(n) {
    _._api._MagickImage_BlackPointCompensation_Set(this._instance, n ? 1 : 0);
  }
  get borderColor() {
    const n = _._api._MagickImage_BorderColor_Get(this._instance);
    return w._create(n);
  }
  set borderColor(n) {
    n._use((e) => {
      _._api._MagickImage_BorderColor_Set(this._instance, e);
    });
  }
  get boundingBox() {
    return this.useExceptionPointer((n) => {
      const e = _._api._MagickImage_BoundingBox_Get(this._instance, n), u = le._fromRectangle(e);
      return u.width === 0 || u.height === 0 ? null : u;
    });
  }
  get channelCount() {
    return _._api._MagickImage_ChannelCount_Get(this._instance);
  }
  get channels() {
    const n = [];
    return [$.Red, $.Green, $.Blue, $.Black, $.Alpha].forEach((e) => {
      _._api._MagickImage_HasChannel(this._instance, e) && n.push(e);
    }), n;
  }
  get chromaticity() {
    return new cu(
      Fe._create(_._api._MagickImage_ChromaRed_Get(this._instance)),
      Fe._create(_._api._MagickImage_ChromaGreen_Get(this._instance)),
      Fe._create(_._api._MagickImage_ChromaBlue_Get(this._instance)),
      Fe._create(_._api._MagickImage_ChromaWhite_Get(this._instance))
    );
  }
  set chromaticity(n) {
    n.blue._use((e) => _._api._MagickImage_ChromaBlue_Set(this._instance, e)), n.green._use((e) => _._api._MagickImage_ChromaGreen_Set(this._instance, e)), n.red._use((e) => _._api._MagickImage_ChromaRed_Set(this._instance, e)), n.white._use((e) => _._api._MagickImage_ChromaWhite_Set(this._instance, e));
  }
  get classType() {
    return _._api._MagickImage_ClassType_Get(this._instance);
  }
  set classType(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_ClassType_Set(this._instance, n, e);
    });
  }
  get colorFuzz() {
    return se._fromQuantum(_._api._MagickImage_ColorFuzz_Get(this._instance));
  }
  set colorFuzz(n) {
    _._api._MagickImage_ColorFuzz_Set(this._instance, n._toQuantum());
  }
  get colormapSize() {
    return _._api._MagickImage_ColormapSize_Get(this._instance);
  }
  set colormapSize(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_ColormapSize_Set(this._instance, n, e);
    });
  }
  get colorSpace() {
    return _._api._MagickImage_ColorSpace_Get(this._instance);
  }
  set colorSpace(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_ColorSpace_Set(this._instance, n, e);
    });
  }
  get colorType() {
    return this.settings.colorType !== void 0 ? this.settings.colorType : _._api._MagickImage_ColorType_Get(this._instance);
  }
  set colorType(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_ColorType_Set(this._instance, n, e);
    });
  }
  get comment() {
    return this.getAttribute("comment");
  }
  set comment(n) {
    n === null ? this.removeAttribute("comment") : this.setAttribute("comment", n);
  }
  get compose() {
    return _._api._MagickImage_Compose_Get(this._instance);
  }
  set compose(n) {
    _._api._MagickImage_Compose_Set(this._instance, n);
  }
  get compression() {
    return _._api._MagickImage_Compression_Get(this._instance);
  }
  get density() {
    return new Ke(
      _._api._MagickImage_ResolutionX_Get(this._instance),
      _._api._MagickImage_ResolutionY_Get(this._instance),
      _._api._MagickImage_ResolutionUnits_Get(this._instance)
    );
  }
  set density(n) {
    _._api._MagickImage_ResolutionX_Set(this._instance, n.x), _._api._MagickImage_ResolutionY_Set(this._instance, n.y), _._api._MagickImage_ResolutionUnits_Set(this._instance, n.units);
  }
  get depth() {
    return _._api._MagickImage_Depth_Get(this._instance);
  }
  set depth(n) {
    _._api._MagickImage_Depth_Set(this._instance, n);
  }
  get endian() {
    return _._api._MagickImage_Endian_Get(this._instance);
  }
  set endian(n) {
    _._api._MagickImage_Endian_Set(this._instance, n);
  }
  get fileName() {
    const n = _._api._MagickImage_FileName_Get(this._instance);
    return n === 0 ? null : _._api.UTF8ToString(n);
  }
  get filterType() {
    return _._api._MagickImage_FilterType_Get(this._instance);
  }
  set filterType(n) {
    _._api._MagickImage_FilterType_Set(this._instance, n);
  }
  get format() {
    return me(_._api._MagickImage_Format_Get(this._instance));
  }
  set format(n) {
    E(n.toString(), (e) => _._api._MagickImage_Format_Set(this._instance, e));
  }
  get gamma() {
    return _._api._MagickImage_Gamma_Get(this._instance);
  }
  get gifDisposeMethod() {
    return _._api._MagickImage_GifDisposeMethod_Get(this._instance);
  }
  set gifDisposeMethod(n) {
    _._api._MagickImage_GifDisposeMethod_Set(this._instance, n);
  }
  get hasAlpha() {
    return this.toBool(_._api._MagickImage_HasAlpha_Get(this._instance));
  }
  set hasAlpha(n) {
    this.useExceptionPointer((e) => {
      n && this.alpha(yr.Opaque), _._api._MagickImage_HasAlpha_Set(this._instance, this.fromBool(n), e);
    });
  }
  get height() {
    return _._api._MagickImage_Height_Get(this._instance);
  }
  get interlace() {
    return _._api._MagickImage_Interlace_Get(this._instance);
  }
  get isOpaque() {
    return this.useExceptionPointer((n) => this.toBool(_._api._MagickImage_IsOpaque_Get(this._instance, n)));
  }
  get interpolate() {
    return _._api._MagickImage_Interpolate_Get(this._instance);
  }
  set interpolate(n) {
    _._api._MagickImage_Interpolate_Set(this._instance, n);
  }
  get label() {
    return this.getAttribute("label");
  }
  set label(n) {
    n === null ? this.removeAttribute("label") : this.setAttribute("label", n);
  }
  get matteColor() {
    const n = _._api._MagickImage_MatteColor_Get(this._instance);
    return w._create(n);
  }
  set matteColor(n) {
    n._use((e) => {
      _._api._MagickImage_MatteColor_Set(this._instance, e);
    });
  }
  get metaChannelCount() {
    return _._api._MagickImage_MetaChannelCount_Get(this._instance);
  }
  set metaChannelCount(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_MetaChannelCount_Set(this._instance, n, e);
    });
  }
  get orientation() {
    return _._api._MagickImage_Orientation_Get(this._instance);
  }
  set orientation(n) {
    _._api._MagickImage_Orientation_Set(this._instance, n);
  }
  get onProgress() {
    return this._progress;
  }
  set onProgress(n) {
    n !== void 0 ? ie.setProgressDelegate(this) : this.disposeProgressDelegate(), this._progress = n;
  }
  get onWarning() {
    return this._warning;
  }
  set onWarning(n) {
    this._warning = n;
  }
  get page() {
    const n = _._api._MagickImage_Page_Get(this._instance);
    return le._fromRectangle(n);
  }
  set page(n) {
    n._toRectangle((e) => {
      _._api._MagickImage_Page_Set(this._instance, e);
    });
  }
  get profileNames() {
    const n = [];
    _._api._MagickImage_ResetProfileIterator(this._instance);
    let e = _._api._MagickImage_GetNextProfileName(this._instance);
    for (; e !== 0; )
      n.push(_._api.UTF8ToString(e)), e = _._api._MagickImage_GetNextProfileName(this._instance);
    return n;
  }
  get quality() {
    return _._api._MagickImage_Quality_Get(this._instance);
  }
  set quality(n) {
    let e = n < 1 ? 1 : n;
    e = e > 100 ? 100 : e, _._api._MagickImage_Quality_Set(this._instance, e), this._settings._quality = e;
  }
  get renderingIntent() {
    return _._api._MagickImage_RenderingIntent_Get(this._instance);
  }
  set renderingIntent(n) {
    _._api._MagickImage_RenderingIntent_Set(this._instance, n);
  }
  get settings() {
    return this._settings;
  }
  get signature() {
    return this.useExceptionPointer((n) => me(_._api._MagickImage_Signature_Get(this._instance, n)));
  }
  get totalColors() {
    return this.useExceptionPointer((n) => _._api._MagickImage_TotalColors_Get(this._instance, n));
  }
  get virtualPixelMethod() {
    return _._api._MagickImage_VirtualPixelMethod_Get(this._instance);
  }
  set virtualPixelMethod(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_VirtualPixelMethod_Set(this._instance, n, e);
    });
  }
  get width() {
    return _._api._MagickImage_Width_Get(this._instance);
  }
  adaptiveBlur(n, e) {
    const u = this.valueOrDefault(n, 0), c = this.valueOrDefault(e, 1);
    this.useException((p) => {
      const h = _._api._MagickImage_AdaptiveBlur(this._instance, u, c, p.ptr);
      this._setInstance(h, p);
    });
  }
  adaptiveResize(n, e) {
    const u = typeof n == "number" ? new le(0, 0, n, e) : n;
    this.useException((c) => {
      E(u.toString(), (p) => {
        const h = _._api._MagickImage_AdaptiveResize(this._instance, p, c.ptr);
        this._setInstance(h, c);
      });
    });
  }
  adaptiveSharpen(n, e, u) {
    let c = 0;
    const p = e ?? 1;
    let h = u ?? J.Undefined;
    n !== void 0 && (e === void 0 ? h = n : c = n), this.useException((S) => {
      const b = _._api._MagickImage_AdaptiveSharpen(this._instance, c, p, h, S.ptr);
      this._setInstance(b, S);
    });
  }
  addNoise(n, e, u) {
    let c = 1, p = u ?? J.Undefined;
    e !== void 0 && (u === void 0 ? p = e : c = e), this.useException((h) => {
      const S = _._api._MagickImage_AddNoise(this._instance, n, c, p, h.ptr);
      this._setInstance(S, h);
    });
  }
  alpha(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_SetAlpha(this._instance, n, e);
    });
  }
  autoGamma(n) {
    this.useExceptionPointer((e) => {
      const u = this.valueOrDefault(n, J.Composite);
      _._api._MagickImage_AutoGamma(this._instance, u, e);
    });
  }
  autoLevel(n) {
    this.useExceptionPointer((e) => {
      const u = this.valueOrDefault(n, J.Undefined);
      _._api._MagickImage_AutoLevel(this._instance, u, e);
    });
  }
  autoOrient() {
    this.useException((n) => {
      const e = _._api._MagickImage_AutoOrient(this._instance, n.ptr);
      this._setInstance(e, n);
    });
  }
  autoThreshold(n) {
    this.useException((e) => {
      _._api._MagickImage_AutoThreshold(this._instance, n, e.ptr);
    });
  }
  blur(n, e, u) {
    let c = 0;
    const p = this.valueOrDefault(e, 1);
    let h = this.valueOrDefault(u, J.Undefined);
    n !== void 0 && (e === void 0 ? h = n : c = n), this.useException((S) => {
      const b = _._api._MagickImage_Blur(this._instance, c, p, h, S.ptr);
      this._setInstance(b, S);
    });
  }
  border(n, e) {
    const u = n, c = this.valueOrDefault(e, n), p = new le(0, 0, u, c);
    this.useException((h) => {
      p._toRectangle((S) => {
        const b = _._api._MagickImage_Border(this._instance, S, h.ptr);
        this._setInstance(b, h);
      });
    });
  }
  brightnessContrast(n, e, u) {
    const c = this.valueOrDefault(u, J.Undefined);
    this.useException((p) => {
      _._api._MagickImage_BrightnessContrast(this._instance, n.toDouble(), e.toDouble(), c, p.ptr);
    });
  }
  charcoal(n, e) {
    const u = n === void 0 ? 0 : n, c = e === void 0 ? 1 : e;
    this.useException((p) => {
      const h = _._api._MagickImage_Charcoal(this._instance, u, c, p.ptr);
      this._setInstance(h, p);
    });
  }
  clahe(n, e, u, c) {
    this.useExceptionPointer((p) => {
      const h = n instanceof se ? n.multiply(this.width) : n, S = e instanceof se ? e.multiply(this.height) : e;
      _._api._MagickImage_Clahe(this._instance, h, S, u, c, p);
    });
  }
  clone(n) {
    return re._clone(this)._use(n);
  }
  colorAlpha(n) {
    if (!this.hasAlpha)
      return;
    const e = re.create();
    e.read(n, this.width, this.height), e.composite(this, Wt.SrcOver, new Ie(0, 0)), this._instance = e._instance;
  }
  compare(n, e, u, c) {
    const p = e instanceof pu, h = p ? e.metric : e;
    let S = u;
    c !== void 0 && (S = c);
    let b = J.Undefined;
    if (typeof S != "function")
      return S !== void 0 && (b = S), this.useExceptionPointer((B) => _._api._MagickImage_CompareDistortion(this._instance, n._instance, h, b, B));
    u !== void 0 && typeof u != "function" && (b = u);
    const T = Ue.use(this, (B) => (p && e._setArtifacts(B), gn.use((ae) => {
      const he = this.useExceptionPointer((Oe) => _._api._MagickImage_Compare(this._instance, n._instance, h, b, ae.ptr, Oe)), Ce = ae.value, We = re._createFromImage(he, this._settings);
      return on._create(Ce, We);
    })));
    return T.difference._use(() => S(T));
  }
  composite(n, e, u, c, p) {
    let h = 0, S = 0, b = Wt.In, T = J.All, B = null;
    e instanceof Ie ? (h = e.x, S = e.y) : e !== void 0 && (b = e), u instanceof Ie ? (h = u.x, S = u.y) : typeof u == "string" ? B = u : u !== void 0 && (T = u), typeof c == "string" ? B = c : c !== void 0 && (T = c), p !== void 0 && (T = p), B !== null && this.setArtifact("compose:args", B), this.useExceptionPointer((ae) => {
      _._api._MagickImage_Composite(this._instance, n._instance, h, S, b, T, ae);
    }), B !== null && this.removeArtifact("compose:args");
  }
  compositeGravity(n, e, u, c, p, h) {
    let S = 0, b = 0, T = Wt.In, B = J.All, ae = null;
    u instanceof Ie ? (S = u.x, b = u.y) : u !== void 0 && (T = u), c instanceof Ie ? (S = c.x, b = c.y) : typeof c == "string" ? ae = c : c !== void 0 && (B = c), typeof p == "string" ? ae = p : p !== void 0 && (B = p), h !== void 0 && (B = h), ae !== null && this.setArtifact("compose:args", ae), this.useExceptionPointer((he) => {
      _._api._MagickImage_CompositeGravity(this._instance, n._instance, e, S, b, T, B, he);
    }), ae !== null && this.removeArtifact("compose:args");
  }
  connectedComponents(n) {
    const e = typeof n == "number" ? new hu(n) : n;
    return Ue.use(this, (c) => (e._setArtifacts(c), this.useException((p) => Ge.use((h) => {
      try {
        const S = _._api._MagickImage_ConnectedComponents(this._instance, e.connectivity, h.ptr, p.ptr);
        return this._setInstance(S, p), _n._create(h.value, this.colormapSize);
      } finally {
        h.value !== 0 && _._api._ConnectedComponent_DisposeList(h.value);
      }
    }))));
  }
  contrast = () => this._contrast(!0);
  contrastStretch(n, e, u) {
    const c = this.width * this.height, p = n.multiply(c);
    let h = 0, S = this.valueOrDefault(u, J.Undefined);
    e instanceof se ? h = c - e.multiply(c) : (h = c - n.multiply(c), e !== void 0 && (S = e)), this.useExceptionPointer((b) => {
      _._api._MagickImage_ContrastStretch(this._instance, p, h, S, b);
    });
  }
  static create(n, e, u) {
    const c = new re(re.createInstance(), new dt());
    return n !== void 0 && c.readOrPing(!1, n, e, u), c;
  }
  crop(n, e, u) {
    let c, p;
    typeof n != "number" ? (c = n, p = this.valueOrDefault(e, Lt.Undefined)) : e !== void 0 && (c = new le(n, e), p = this.valueOrDefault(u, Lt.Undefined)), this.useException((h) => {
      E(c.toString(), (S) => {
        const b = _._api._MagickImage_Crop(this._instance, S, p, h.ptr);
        this._setInstance(b, h);
      });
    });
  }
  cropToTiles(n, e, u) {
    let c, p;
    return typeof n == "number" && typeof e == "number" && u !== void 0 ? (c = new le(0, 0, n, e), p = u) : typeof n != "number" && typeof e != "number" && (c = n, p = e), this.useException((h) => E(c.toString(), (S) => {
      const b = _._api._MagickImage_CropToTiles(this._instance, S, h.ptr);
      return Me._createFromImages(b, this._settings)._use(p);
    }));
  }
  deskew(n, e) {
    return Ue.use(this, (u) => {
      e !== void 0 && u.setArtifact("deskew:auto-crop", e), this.useException((p) => {
        const h = _._api._MagickImage_Deskew(this._instance, n._toQuantum(), p.ptr);
        this._setInstance(h, p);
      });
      const c = Number(this.getArtifact("deskew:angle"));
      return isNaN(c) ? 0 : c;
    });
  }
  distort(n, e) {
    Ue.use(this, (u) => {
      let c, p = 0;
      typeof n == "number" ? c = n : (c = n.method, p = n.bestFit ? 1 : 0, n._setArtifacts(u)), this.useException((h) => {
        Ir(e, (S) => {
          const b = _._api._MagickImage_Distort(this._instance, c, p, S, e.length, h.ptr);
          this._setInstance(b, h);
        });
      });
    });
  }
  draw(...n) {
    const e = n.flat();
    e.length !== 0 && zt._use(this, (u) => {
      u.draw(e);
    });
  }
  evaluate(n, e, u, c) {
    if (typeof e == "number") {
      const p = e, h = typeof u == "number" ? u : u._toQuantum();
      this.useExceptionPointer((S) => {
        _._api._MagickImage_EvaluateOperator(this._instance, n, p, h, S);
      });
    } else if (c !== void 0) {
      if (typeof u != "number")
        throw new K("this should not happen");
      const p = e, h = u, S = typeof c == "number" ? c : c._toQuantum();
      if (p.isPercentage)
        throw new K("percentage is not supported");
      this.useExceptionPointer((b) => {
        pr.use(this, p, (T) => {
          _._api._MagickImage_EvaluateGeometry(this._instance, n, T, h, S, b);
        });
      });
    }
  }
  extent(n, e, u) {
    let c = Lt.Undefined, p;
    typeof n != "number" ? p = n : typeof e == "number" && (p = new le(n, e)), typeof e == "number" ? c = e : e !== void 0 && (this.backgroundColor = e), typeof u == "number" ? c = u : u !== void 0 && (this.backgroundColor = u), this.useException((h) => {
      E(p.toString(), (S) => {
        const b = _._api._MagickImage_Extent(this._instance, S, c, h.ptr);
        this._setInstance(b, h);
      });
    });
  }
  flip() {
    this.useException((n) => {
      const e = _._api._MagickImage_Flip(this._instance, n.ptr);
      this._setInstance(e, n);
    });
  }
  flop() {
    this.useException((n) => {
      const e = _._api._MagickImage_Flop(this._instance, n.ptr);
      this._setInstance(e, n);
    });
  }
  gammaCorrect(n, e) {
    const u = this.valueOrDefault(e, J.Undefined);
    this.useExceptionPointer((c) => {
      _._api._MagickImage_GammaCorrect(this._instance, n, u, c);
    });
  }
  gaussianBlur(n, e, u) {
    const c = this.valueOrDefault(e, 1), p = this.valueOrDefault(u, J.Undefined);
    this.useException((h) => {
      const S = _._api._MagickImage_GaussianBlur(this._instance, n, c, p, h.ptr);
      this._setInstance(S, h);
    });
  }
  getArtifact(n) {
    return E(n, (e) => {
      const u = _._api._MagickImage_GetArtifact(this._instance, e);
      return me(u);
    });
  }
  getAttribute(n) {
    return this.useException((e) => E(n, (u) => {
      const c = _._api._MagickImage_GetAttribute(this._instance, u, e.ptr);
      return me(c);
    }));
  }
  getColorProfile() {
    const n = ["icc", "icm"];
    for (const e of n) {
      const u = this._getProfile(e);
      if (u !== null)
        return new fu(e, u);
    }
    return null;
  }
  getPixels(n) {
    if (this._settings._ping)
      throw new K("image contains no pixel data");
    return Ze._use(this, n);
  }
  getProfile(n) {
    const e = this._getProfile(n);
    return e === null ? null : new wr(n, e);
  }
  getWriteMask(n) {
    const e = this.useExceptionPointer((c) => _._api._MagickImage_GetWriteMask(this._instance, c)), u = e === 0 ? null : new re(e, new dt());
    return u == null ? n(u) : u._use(n);
  }
  grayscale(n = Mr.Undefined) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_Grayscale(this._instance, n, e);
    });
  }
  hasProfile(n) {
    return E(n, (e) => this.toBool(_._api._MagickImage_HasProfile(this._instance, e)));
  }
  histogram() {
    const n = /* @__PURE__ */ new Map();
    return this.useExceptionPointer((e) => {
      Ge.use((u) => {
        const c = _._api._MagickImage_Histogram(this._instance, u.ptr, e);
        if (c !== 0) {
          const p = u.value;
          for (let h = 0; h < p; h++) {
            const S = _._api._MagickColorCollection_GetInstance(c, h), b = w._create(S), T = _._api._MagickColor_Count_Get(S);
            n.set(b.toString(), T);
          }
          _._api._MagickColorCollection_DisposeList(c);
        }
      });
    }), n;
  }
  inverseContrast = () => this._contrast(!1);
  inverseLevel(n, e, u, c) {
    const p = this.valueOrDefault(u, 1), h = this.valueOrDefault(c, J.Composite);
    this.useExceptionPointer((S) => {
      _._api._MagickImage_InverseLevel(this._instance, n.toDouble(), e._toQuantum(), p, h, S);
    });
  }
  inverseOpaque = (n, e) => this._opaque(n, e, !0);
  inverseSigmoidalContrast(n, e, u) {
    this._sigmoidalContrast(!1, n, e, u);
  }
  inverseTransparent = (n) => this._transparent(n, !0);
  level(n, e, u, c) {
    const p = this.valueOrDefault(u, 1), h = this.valueOrDefault(c, J.Composite);
    this.useExceptionPointer((S) => {
      _._api._MagickImage_Level(this._instance, n.toDouble(), e._toQuantum(), p, h, S);
    });
  }
  linearStretch(n, e) {
    this.useExceptionPointer((u) => {
      _._api._MagickImage_LinearStretch(this._instance, n.toDouble(), e._toQuantum(), u);
    });
  }
  liquidRescale(n, e) {
    const u = typeof n == "number" ? new le(n, e) : n;
    this.useException((c) => {
      E(u.toString(), (p) => {
        const h = _._api._MagickImage_LiquidRescale(this._instance, p, u.x, u.y, c.ptr);
        this._setInstance(h, c);
      });
    });
  }
  negate(n) {
    this.useExceptionPointer((e) => {
      const u = this.valueOrDefault(n, J.Undefined);
      _._api._MagickImage_Negate(this._instance, 0, u, e);
    });
  }
  negateGrayScale(n) {
    this.useExceptionPointer((e) => {
      const u = this.valueOrDefault(n, J.Undefined);
      _._api._MagickImage_Negate(this._instance, 1, u, e);
    });
  }
  normalize() {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_Normalize(this._instance, n);
    });
  }
  modulate(n, e, u) {
    const c = this.valueOrDefault(e, new se(100)), p = this.valueOrDefault(u, new se(100));
    this.useExceptionPointer((h) => {
      const S = `${n.toDouble()}/${c.toDouble()}/${p.toDouble()}`;
      E(S, (b) => {
        _._api._MagickImage_Modulate(this._instance, b, h);
      });
    });
  }
  morphology(n) {
    this.useException((e) => {
      E(n.kernel, (u) => {
        const c = _._api._MagickImage_Morphology(this._instance, n.method, u, n.channels, n.iterations, e.ptr);
        this._setInstance(c, e);
      });
    });
  }
  motionBlur(n, e, u) {
    this.useException((c) => {
      const p = _._api._MagickImage_MotionBlur(this._instance, n, e, u, c.ptr);
      this._setInstance(p, c);
    });
  }
  oilPaint(n) {
    const e = this.valueOrDefault(n, 3), u = 0;
    this.useException((c) => {
      const p = _._api._MagickImage_OilPaint(this._instance, e, u, c.ptr);
      this._setInstance(p, c);
    });
  }
  opaque = (n, e) => this._opaque(n, e, !1);
  ping(n, e) {
    this.readOrPing(!0, n, e);
  }
  quantize(n) {
    const e = this.valueOrDefault(n, new an());
    return this.useException((u) => {
      e._use((c) => {
        _._api._MagickImage_Quantize(this._instance, c._instance, u.ptr);
      });
    }), e.measureErrors ? Nt._create(this) : null;
  }
  read(n, e, u) {
    this.readOrPing(!1, n, e, u);
  }
  readFromCanvas(n, e) {
    const u = n.getContext("2d", e);
    if (u === null)
      return;
    const c = u.getImageData(0, 0, n.width, n.height), p = new De();
    p.format = Pe.Rgba, p.width = n.width, p.height = n.height, this.useException((h) => {
      this.readFromArray(c.data, p, h);
    });
  }
  removeArtifact(n) {
    E(n, (e) => {
      _._api._MagickImage_RemoveArtifact(this._instance, e);
    });
  }
  removeAttribute(n) {
    E(n, (e) => {
      _._api._MagickImage_RemoveAttribute(this._instance, e);
    });
  }
  removeProfile(n) {
    const e = typeof n == "string" ? n : n.name;
    E(e, (u) => {
      _._api._MagickImage_RemoveProfile(this._instance, u);
    });
  }
  removeWriteMask() {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_SetWriteMask(this._instance, 0, n);
    });
  }
  resetPage() {
    this.page = new le(0, 0, 0, 0);
  }
  resize(n, e) {
    const u = typeof n == "number" ? new le(n, e) : n;
    this.useException((c) => {
      E(u.toString(), (p) => {
        const h = _._api._MagickImage_Resize(this._instance, p, c.ptr);
        this._setInstance(h, c);
      });
    });
  }
  rotate(n) {
    this.useException((e) => {
      const u = _._api._MagickImage_Rotate(this._instance, n, e.ptr);
      this._setInstance(u, e);
    });
  }
  separate(n, e) {
    return this.useException((u) => {
      let c, p = J.Undefined;
      if (typeof n == "number" && e !== void 0)
        p = n, c = e;
      else if (typeof n == "function")
        c = n;
      else
        throw new K("invalid arguments");
      const h = _._api._MagickImage_Separate(this._instance, p, u.ptr);
      return Me._createFromImages(h, this._settings)._use(c);
    });
  }
  sepiaTone(n = new se(80)) {
    this.useException((e) => {
      const u = typeof n == "number" ? new se(n) : n, c = _._api._MagickImage_SepiaTone(this._instance, u._toQuantum(), e.ptr);
      this._setInstance(c, e);
    });
  }
  setArtifact(n, e) {
    let u;
    typeof e == "string" ? u = e : typeof e == "boolean" ? u = this.fromBool(e).toString() : u = e.toString(), E(n, (c) => {
      E(u, (p) => {
        _._api._MagickImage_SetArtifact(this._instance, c, p);
      });
    });
  }
  setAttribute(n, e) {
    this.useException((u) => {
      E(n, (c) => {
        E(e, (p) => {
          _._api._MagickImage_SetAttribute(this._instance, c, p, u.ptr);
        });
      });
    });
  }
  setProfile(n, e) {
    const u = typeof n == "string" ? n : n.name;
    let c;
    e !== void 0 ? c = e : typeof n != "string" && (c = n.data), this.useException((p) => {
      E(u, (h) => {
        fr(c, (S) => {
          _._api._MagickImage_SetProfile(this._instance, h, S, c.byteLength, p.ptr);
        });
      });
    });
  }
  setWriteMask(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_SetWriteMask(this._instance, n._instance, e);
    });
  }
  sharpen(n, e, u) {
    const c = this.valueOrDefault(n, 0), p = this.valueOrDefault(e, 1), h = this.valueOrDefault(u, J.Undefined);
    this.useException((S) => {
      const b = _._api._MagickImage_Sharpen(this._instance, c, p, h, S.ptr);
      this._setInstance(b, S);
    });
  }
  shave(n, e) {
    this.useException((u) => {
      const c = _._api._MagickImage_Shave(this._instance, n, e, u.ptr);
      this._setInstance(c, u);
    });
  }
  sigmoidalContrast(n, e, u) {
    this._sigmoidalContrast(!0, n, e, u);
  }
  solarize(n = new se(50)) {
    this.useException((e) => {
      const u = typeof n == "number" ? new se(n) : n;
      _._api._MagickImage_Solarize(this._instance, u._toQuantum(), e.ptr);
    });
  }
  splice(n) {
    pr.use(this, n, (e) => {
      this.useException((u) => {
        const c = _._api._MagickImage_Splice(this._instance, e, u.ptr);
        this._setInstance(c, u);
      });
    });
  }
  statistics(n) {
    const e = this.valueOrDefault(n, J.All);
    return this.useExceptionPointer((u) => {
      const c = _._api._MagickImage_Statistics(this._instance, e, u), p = fn._create(this, c, e);
      return _._api._Statistics_DisposeList(c), p;
    });
  }
  strip() {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_Strip(this._instance, n);
    });
  }
  transformColorSpace(n, e) {
    const u = n;
    let c;
    e !== void 0 && (c = e);
    const p = this.hasProfile("icc") || this.hasProfile("icm");
    if (c === void 0) {
      if (!p)
        return !1;
      c = u;
    } else {
      if (u.colorSpace !== this.colorSpace)
        return !1;
      p || this.setProfile(u);
    }
    return this.setProfile(c), !0;
  }
  threshold(n, e) {
    const u = this.valueOrDefault(e, J.Undefined);
    this.useExceptionPointer((c) => {
      _._api._MagickImage_Threshold(this._instance, n._toQuantum(), u, c);
    });
  }
  thumbnail(n, e) {
    const u = typeof n == "number" ? new le(n, e) : n;
    this.useException((c) => {
      E(u.toString(), (p) => {
        const h = _._api._MagickImage_Thumbnail(this._instance, p, c.ptr);
        this._setInstance(h, c);
      });
    });
  }
  toString = () => `${this.format} ${this.width}x${this.height} ${this.depth}-bit ${ne[this.colorSpace]}`;
  transparent(n) {
    n._use((e) => {
      this.useExceptionPointer((u) => {
        _._api._MagickImage_Transparent(this._instance, e, 0, u);
      });
    });
  }
  trim(...n) {
    if (n.length > 0)
      if (n.length == 1 && n[0] instanceof se) {
        const e = n[0];
        this.setArtifact("trim:percent-background", e.toDouble().toString());
      } else {
        const e = n, u = [...new Set(yu(e))].join(",");
        this.setArtifact("trim:edges", u);
      }
    this.useException((e) => {
      const u = _._api._MagickImage_Trim(this._instance, e.ptr);
      this._setInstance(u, e), this.removeArtifact("trim:edges"), this.removeArtifact("trim:percent-background");
    });
  }
  wave(n, e, u) {
    const c = this.valueOrDefault(n, this.interpolate), p = this.valueOrDefault(e, 25), h = this.valueOrDefault(u, 150);
    this.useException((S) => {
      const b = _._api._MagickImage_Wave(this._instance, c, p, h, S.ptr);
      this._setInstance(b, S);
    });
  }
  vignette(n, e, u, c) {
    const p = this.valueOrDefault(n, 0), h = this.valueOrDefault(e, 1), S = this.valueOrDefault(u, 0), b = this.valueOrDefault(c, 0);
    this.useException((T) => {
      const B = _._api._MagickImage_Vignette(this._instance, p, h, S, b, T.ptr);
      this._setInstance(B, T);
    });
  }
  write(n, e) {
    let u = 0, c = 0;
    e !== void 0 ? this._settings.format = n : e = n, this.useException((h) => {
      Ge.use((S) => {
        this._settings._use((b) => {
          try {
            u = _._api._MagickImage_WriteBlob(this._instance, b._instance, S.ptr, h.ptr), c = S.value;
          } catch {
            u !== 0 && (u = _._api._MagickMemory_Relinquish(u));
          }
        });
      });
    });
    const p = new Sr(u, c, e);
    return ce._disposeAfterExecution(p, p.func);
  }
  writeToCanvas(n, e) {
    n.width = this.width, n.height = this.height;
    const u = n.getContext("2d", e);
    u !== null && Ze._map(this, "RGBA", (c) => {
      const p = u.createImageData(this.width, this.height);
      let h = 0;
      for (let S = 0; S < this.height; S++)
        for (let b = 0; b < this.width; b++)
          p.data[h++] = _._api.HEAPU8[c++], p.data[h++] = _._api.HEAPU8[c++], p.data[h++] = _._api.HEAPU8[c++], p.data[h++] = _._api.HEAPU8[c++];
      u.putImageData(p, 0, 0);
    });
  }
  /** @internal */
  static _createFromImage(n, e) {
    return new re(n, e);
  }
  /** @internal */
  _channelOffset(n) {
    return _._api._MagickImage_HasChannel(this._instance, n) ? _._api._MagickImage_ChannelOffset(this._instance, n) : -1;
  }
  /** @internal */
  static _clone(n) {
    return A.usePointer((e) => new re(_._api._MagickImage_Clone(n._instance, e), n._settings._clone()));
  }
  /** @internal */
  _getSettings() {
    return this._settings;
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new K("no image has been read");
  }
  /** @internal */
  _setInstance(n, e) {
    if (super._setInstance(n, e) === !0 || n === 0 && this.onProgress !== void 0)
      return !0;
    throw new K("out of memory");
  }
  _use(n) {
    return ce._disposeAfterExecution(this, n);
  }
  static _create(n) {
    return re.create()._use(n);
  }
  onDispose() {
    this.disposeProgressDelegate();
  }
  _contrast(n) {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_Contrast(this._instance, this.fromBool(n), e);
    });
  }
  _getProfile(n) {
    return E(n, (e) => {
      const u = _._api._MagickImage_GetProfile(this._instance, e), c = vu.toArray(u);
      return c === null ? null : c;
    });
  }
  _opaque(n, e, u) {
    this.useExceptionPointer((c) => {
      n._use((p) => {
        e._use((h) => {
          _._api._MagickImage_Opaque(this._instance, p, h, this.fromBool(u), c);
        });
      });
    });
  }
  _sigmoidalContrast(n, e, u, c) {
    let p;
    u !== void 0 ? typeof u == "number" ? p = u : p = u.multiply($e.max) : p = $e.max * 0.5;
    const h = this.valueOrDefault(c, J.Undefined);
    this.useExceptionPointer((S) => {
      _._api._MagickImage_SigmoidalContrast(this._instance, this.fromBool(n), e, p, h, S);
    });
  }
  _transparent(n, e) {
    n._use((u) => {
      this.useExceptionPointer((c) => {
        _._api._MagickImage_Transparent(this._instance, u, this.fromBool(e), c);
      });
    });
  }
  static createInstance() {
    return A.usePointer((n) => _._api._MagickImage_Create(0, n));
  }
  fromBool(n) {
    return n ? 1 : 0;
  }
  disposeProgressDelegate() {
    ie.removeProgressDelegate(this), this._progress = void 0;
  }
  readOrPing(n, e, u, c) {
    this.useException((p) => {
      const h = u instanceof De ? u : new De(this._settings);
      if (h._ping = n, this._settings._ping = n, h.frameCount !== void 0 && h.frameCount > 1)
        throw new K("The frame count can only be set to 1 when a single image is being read.");
      if (typeof e == "string")
        h._fileName = e;
      else if (dr(e)) {
        this.readFromArray(e, h, p);
        return;
      } else
        h._fileName = "xc:" + e.toShortString(), h.width = typeof u == "number" ? u : 0, h.height = typeof c == "number" ? c : 0;
      h._use((S) => {
        const b = _._api._MagickImage_ReadFile(S._instance, p.ptr);
        this._setInstance(b, p);
      });
    });
  }
  readFromArray(n, e, u) {
    e._use((c) => {
      fr(n, (p) => {
        const h = _._api._MagickImage_ReadBlob(c._instance, p, 0, n.byteLength, u.ptr);
        this._setInstance(h, u);
      });
    });
  }
  toBool(n) {
    return n === 1;
  }
  valueOrDefault(n, e) {
    return n === void 0 ? e : n;
  }
  useException(n) {
    return A.use(n, (e) => {
      this.onWarning !== void 0 && this.onWarning(new hr(e));
    });
  }
  useExceptionPointer(n) {
    return A.usePointer(n, (e) => {
      this.onWarning !== void 0 && this.onWarning(new hr(e));
    });
  }
}
var Iu = (() => {
  var t = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(n = {}) {
    var e = n, u, c;
    e.ready = new Promise((r, a) => {
      u = r, c = a;
    }), (!globalThis.crypto || !globalThis.crypto.getRandomValues) && (globalThis.crypto = { getRandomValues: (r) => {
      for (let a = 0; a < r.length; a++) r[a] = Math.random() * 256 | 0;
    } });
    var p = Object.assign({}, e), h = "./this.program", S = (r, a) => {
      throw a;
    }, b = typeof window == "object", T = typeof importScripts == "function";
    typeof process == "object" && typeof process.versions == "object" && process.versions.node;
    var B = "";
    function ae(r) {
      return e.locateFile ? e.locateFile(r, B) : B + r;
    }
    var he, Ce, We;
    (b || T) && (T ? B = self.location.href : typeof document < "u" && document.currentScript && (B = document.currentScript.src), t && (B = t), B.indexOf("blob:") !== 0 ? B = B.substr(0, B.replace(/[?#].*/, "").lastIndexOf("/") + 1) : B = "", he = (r) => {
      var a = new XMLHttpRequest();
      return a.open("GET", r, !1), a.send(null), a.responseText;
    }, T && (We = (r) => {
      var a = new XMLHttpRequest();
      return a.open("GET", r, !1), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response);
    }), Ce = (r, a, i) => {
      var s = new XMLHttpRequest();
      s.open("GET", r, !0), s.responseType = "arraybuffer", s.onload = () => {
        if (s.status == 200 || s.status == 0 && s.response) {
          a(s.response);
          return;
        }
        i();
      }, s.onerror = i, s.send(null);
    });
    var Oe = e.print || console.log.bind(console), Ae = e.printErr || console.error.bind(console);
    Object.assign(e, p), p = null, e.arguments && e.arguments, e.thisProgram && (h = e.thisProgram), e.quit && (S = e.quit);
    var et;
    e.wasmBinary && (et = e.wasmBinary);
    var Cr = e.noExitRuntime || !0;
    typeof WebAssembly != "object" && de("no native wasm support detected");
    var wt, Ht = !1;
    function Ar(r, a) {
      r || de(a);
    }
    var V, te, ue, tt, G, W, St, oe, pn, kt;
    function hn() {
      var r = wt.buffer;
      e.HEAP8 = V = new Int8Array(r), e.HEAP16 = ue = new Int16Array(r), e.HEAP32 = G = new Int32Array(r), e.HEAPU8 = te = new Uint8Array(r), e.HEAPU16 = tt = new Uint16Array(r), e.HEAPU32 = W = new Uint32Array(r), e.HEAPF32 = St = new Float32Array(r), e.HEAPF64 = kt = new Float64Array(r), e.HEAP64 = oe = new BigInt64Array(r), e.HEAPU64 = pn = new BigUint64Array(r);
    }
    var Le, dn = [], yn = [], wn = [], Rr = 0;
    function Er() {
      return Cr || Rr > 0;
    }
    function Tr() {
      if (e.preRun)
        for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
          Br(e.preRun.shift());
      Ft(dn);
    }
    function Wr() {
      !e.noFSInit && !l.init.initialized && l.init(), l.ignorePermissions = !1, Ft(yn);
    }
    function Lr() {
      if (e.postRun)
        for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; )
          zr(e.postRun.shift());
      Ft(wn);
    }
    function Br(r) {
      dn.unshift(r);
    }
    function xr(r) {
      yn.unshift(r);
    }
    function zr(r) {
      wn.unshift(r);
    }
    var Be = 0, nt = null;
    function lo(r) {
      return r;
    }
    function Ut(r) {
      Be++, e.monitorRunDependencies && e.monitorRunDependencies(Be);
    }
    function vt(r) {
      if (Be--, e.monitorRunDependencies && e.monitorRunDependencies(Be), Be == 0 && nt) {
        var a = nt;
        nt = null, a();
      }
    }
    function de(r) {
      e.onAbort && e.onAbort(r), r = "Aborted(" + r + ")", Ae(r), Ht = !0, r += ". Build with -sASSERTIONS for more info.";
      var a = new WebAssembly.RuntimeError(r);
      throw c(a), a;
    }
    var Nr = "data:application/octet-stream;base64,";
    function Sn(r) {
      return r.startsWith(Nr);
    }
    function kn(r) {
      return r.startsWith("file://");
    }
    var je;
    je = "magick.wasm", Sn(je) || (je = ae(je));
    function vn(r) {
      try {
        if (r == je && et)
          return new Uint8Array(et);
        if (We)
          return We(r);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        de(a);
      }
    }
    function Hr(r) {
      if (!et && (b || T)) {
        if (typeof fetch == "function" && !kn(r))
          return fetch(r, { credentials: "same-origin" }).then((a) => {
            if (!a.ok)
              throw "failed to load wasm binary file at '" + r + "'";
            return a.arrayBuffer();
          }).catch(() => vn(r));
        if (Ce)
          return new Promise((a, i) => {
            Ce(r, (s) => a(new Uint8Array(s)), i);
          });
      }
      return Promise.resolve().then(() => vn(r));
    }
    function In(r, a, i) {
      return Hr(r).then((s) => WebAssembly.instantiate(s, a)).then((s) => s).then(i, (s) => {
        Ae("failed to asynchronously prepare wasm: " + s), de(s);
      });
    }
    function Ur(r, a, i, s) {
      return !r && typeof WebAssembly.instantiateStreaming == "function" && !Sn(a) && !kn(a) && typeof fetch == "function" ? fetch(a, { credentials: "same-origin" }).then((o) => {
        var g = WebAssembly.instantiateStreaming(o, i);
        return g.then(s, function(m) {
          return Ae("wasm streaming compile failed: " + m), Ae("falling back to ArrayBuffer instantiation"), In(a, i, s);
        });
      }) : In(a, i, s);
    }
    function Fr() {
      var r = { a: Ps };
      function a(s, o) {
        var g = s.exports;
        return e.asm = g, wt = e.asm.ab, hn(), Le = e.asm.ub, xr(e.asm.bb), vt(), g;
      }
      Ut();
      function i(s) {
        a(s.instance);
      }
      if (e.instantiateWasm)
        try {
          return e.instantiateWasm(r, a);
        } catch (s) {
          Ae("Module.instantiateWasm callback failed with error: " + s), c(s);
        }
      return Ur(et, je, r, i).catch(c), {};
    }
    function $r(r) {
      this.name = "ExitStatus", this.message = `Program terminated with exit(${r})`, this.status = r;
    }
    var Ft = (r) => {
      for (; r.length > 0; )
        r.shift()(e);
    };
    function Yr(r, a = "i8") {
      switch (a.endsWith("*") && (a = "*"), a) {
        case "i1":
          return V[r >>> 0];
        case "i8":
          return V[r >>> 0];
        case "i16":
          return ue[r >>> 1];
        case "i32":
          return G[r >>> 2];
        case "i64":
          return oe[r >> 3];
        case "float":
          return St[r >>> 2];
        case "double":
          return kt[r >>> 3];
        case "*":
          return W[r >>> 2];
        default:
          de(`invalid type for getValue: ${a}`);
      }
    }
    function jr(r, a, i = "i8") {
      switch (i.endsWith("*") && (i = "*"), i) {
        case "i1":
          V[r >>> 0] = a;
          break;
        case "i8":
          V[r >>> 0] = a;
          break;
        case "i16":
          ue[r >>> 1] = a;
          break;
        case "i32":
          G[r >>> 2] = a;
          break;
        case "i64":
          oe[r >> 3] = BigInt(a);
          break;
        case "float":
          St[r >>> 2] = a;
          break;
        case "double":
          kt[r >>> 3] = a;
          break;
        case "*":
          W[r >>> 2] = a;
          break;
        default:
          de(`invalid type for setValue: ${i}`);
      }
    }
    var rt = [], x = (r) => {
      var a = rt[r];
      return a || (r >= rt.length && (rt.length = r + 1), rt[r] = a = Le.get(r)), a;
    }, Xr = (r, a) => x(r)(a), Xe = 0;
    function Mn(r) {
      this.excPtr = r, this.ptr = r - 24, this.set_type = function(a) {
        W[this.ptr + 4 >>> 2] = a;
      }, this.get_type = function() {
        return W[this.ptr + 4 >>> 2];
      }, this.set_destructor = function(a) {
        W[this.ptr + 8 >>> 2] = a;
      }, this.get_destructor = function() {
        return W[this.ptr + 8 >>> 2];
      }, this.set_caught = function(a) {
        a = a ? 1 : 0, V[this.ptr + 12 >>> 0] = a;
      }, this.get_caught = function() {
        return V[this.ptr + 12 >>> 0] != 0;
      }, this.set_rethrown = function(a) {
        a = a ? 1 : 0, V[this.ptr + 13 >>> 0] = a;
      }, this.get_rethrown = function() {
        return V[this.ptr + 13 >>> 0] != 0;
      }, this.init = function(a, i) {
        this.set_adjusted_ptr(0), this.set_type(a), this.set_destructor(i);
      }, this.set_adjusted_ptr = function(a) {
        W[this.ptr + 16 >>> 2] = a;
      }, this.get_adjusted_ptr = function() {
        return W[this.ptr + 16 >>> 2];
      }, this.get_exception_ptr = function() {
        var a = lr(this.get_type());
        if (a)
          return W[this.excPtr >>> 2];
        var i = this.get_adjusted_ptr();
        return i !== 0 ? i : this.excPtr;
      };
    }
    function Vr(r) {
      throw Xe || (Xe = r), Xe;
    }
    function qr() {
      var r = Xe;
      if (!r)
        return pt(0), 0;
      var a = new Mn(r);
      a.set_adjusted_ptr(r);
      var i = a.get_type();
      if (!i)
        return pt(0), r;
      for (var s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        if (o === 0 || o === i)
          break;
        var g = a.ptr + 16;
        if (_r(o, i, g))
          return pt(o), r;
      }
      return pt(i), r;
    }
    var Qr = qr;
    function Jr(r, a, i) {
      var s = new Mn(r);
      throw s.init(a, i), Xe = r, Xe;
    }
    var Y = { isAbs: (r) => r.charAt(0) === "/", splitPath: (r) => {
      var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return a.exec(r).slice(1);
    }, normalizeArray: (r, a) => {
      for (var i = 0, s = r.length - 1; s >= 0; s--) {
        var o = r[s];
        o === "." ? r.splice(s, 1) : o === ".." ? (r.splice(s, 1), i++) : i && (r.splice(s, 1), i--);
      }
      if (a)
        for (; i; i--)
          r.unshift("..");
      return r;
    }, normalize: (r) => {
      var a = Y.isAbs(r), i = r.substr(-1) === "/";
      return r = Y.normalizeArray(r.split("/").filter((s) => !!s), !a).join("/"), !r && !a && (r = "."), r && i && (r += "/"), (a ? "/" : "") + r;
    }, dirname: (r) => {
      var a = Y.splitPath(r), i = a[0], s = a[1];
      return !i && !s ? "." : (s && (s = s.substr(0, s.length - 1)), i + s);
    }, basename: (r) => {
      if (r === "/") return "/";
      r = Y.normalize(r), r = r.replace(/\/$/, "");
      var a = r.lastIndexOf("/");
      return a === -1 ? r : r.substr(a + 1);
    }, join: function() {
      var r = Array.prototype.slice.call(arguments);
      return Y.normalize(r.join("/"));
    }, join2: (r, a) => Y.normalize(r + "/" + a) }, Kr = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
        return (r) => crypto.getRandomValues(r);
      de("initRandomDevice");
    }, $t = (r) => ($t = Kr())(r), ye = { resolve: function() {
      for (var r = "", a = !1, i = arguments.length - 1; i >= -1 && !a; i--) {
        var s = i >= 0 ? arguments[i] : l.cwd();
        if (typeof s != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!s)
          return "";
        r = s + "/" + r, a = Y.isAbs(s);
      }
      return r = Y.normalizeArray(r.split("/").filter((o) => !!o), !a).join("/"), (a ? "/" : "") + r || ".";
    }, relative: (r, a) => {
      r = ye.resolve(r).substr(1), a = ye.resolve(a).substr(1);
      function i(y) {
        for (var k = 0; k < y.length && y[k] === ""; k++)
          ;
        for (var D = y.length - 1; D >= 0 && y[D] === ""; D--)
          ;
        return k > D ? [] : y.slice(k, D - k + 1);
      }
      for (var s = i(r.split("/")), o = i(a.split("/")), g = Math.min(s.length, o.length), m = g, f = 0; f < g; f++)
        if (s[f] !== o[f]) {
          m = f;
          break;
        }
      for (var d = [], f = m; f < s.length; f++)
        d.push("..");
      return d = d.concat(o.slice(m)), d.join("/");
    } }, xe = (r) => {
      for (var a = 0, i = 0; i < r.length; ++i) {
        var s = r.charCodeAt(i);
        s <= 127 ? a++ : s <= 2047 ? a += 2 : s >= 55296 && s <= 57343 ? (a += 4, ++i) : a += 3;
      }
      return a;
    }, Yt = (r, a, i, s) => {
      if (i >>>= 0, !(s > 0)) return 0;
      for (var o = i, g = i + s - 1, m = 0; m < r.length; ++m) {
        var f = r.charCodeAt(m);
        if (f >= 55296 && f <= 57343) {
          var d = r.charCodeAt(++m);
          f = 65536 + ((f & 1023) << 10) | d & 1023;
        }
        if (f <= 127) {
          if (i >= g) break;
          a[i++ >>> 0] = f;
        } else if (f <= 2047) {
          if (i + 1 >= g) break;
          a[i++ >>> 0] = 192 | f >> 6, a[i++ >>> 0] = 128 | f & 63;
        } else if (f <= 65535) {
          if (i + 2 >= g) break;
          a[i++ >>> 0] = 224 | f >> 12, a[i++ >>> 0] = 128 | f >> 6 & 63, a[i++ >>> 0] = 128 | f & 63;
        } else {
          if (i + 3 >= g) break;
          a[i++ >>> 0] = 240 | f >> 18, a[i++ >>> 0] = 128 | f >> 12 & 63, a[i++ >>> 0] = 128 | f >> 6 & 63, a[i++ >>> 0] = 128 | f & 63;
        }
      }
      return a[i >>> 0] = 0, i - o;
    };
    function It(r, a, i) {
      var s = xe(r) + 1, o = new Array(s), g = Yt(r, o, 0, o.length);
      return a && (o.length = g), o;
    }
    var Dn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Ve = (r, a, i) => {
      a >>>= 0;
      for (var s = a + i, o = a; r[o] && !(o >= s); ) ++o;
      if (o - a > 16 && r.buffer && Dn)
        return Dn.decode(r.subarray(a, o));
      for (var g = ""; a < o; ) {
        var m = r[a++];
        if (!(m & 128)) {
          g += String.fromCharCode(m);
          continue;
        }
        var f = r[a++] & 63;
        if ((m & 224) == 192) {
          g += String.fromCharCode((m & 31) << 6 | f);
          continue;
        }
        var d = r[a++] & 63;
        if ((m & 240) == 224 ? m = (m & 15) << 12 | f << 6 | d : m = (m & 7) << 18 | f << 12 | d << 6 | r[a++] & 63, m < 65536)
          g += String.fromCharCode(m);
        else {
          var y = m - 65536;
          g += String.fromCharCode(55296 | y >> 10, 56320 | y & 1023);
        }
      }
      return g;
    }, ze = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(r, a) {
      ze.ttys[r] = { input: [], output: [], ops: a }, l.registerDevice(r, ze.stream_ops);
    }, stream_ops: { open: function(r) {
      var a = ze.ttys[r.node.rdev];
      if (!a)
        throw new l.ErrnoError(43);
      r.tty = a, r.seekable = !1;
    }, close: function(r) {
      r.tty.ops.fsync(r.tty);
    }, fsync: function(r) {
      r.tty.ops.fsync(r.tty);
    }, read: function(r, a, i, s, o) {
      if (!r.tty || !r.tty.ops.get_char)
        throw new l.ErrnoError(60);
      for (var g = 0, m = 0; m < s; m++) {
        var f;
        try {
          f = r.tty.ops.get_char(r.tty);
        } catch {
          throw new l.ErrnoError(29);
        }
        if (f === void 0 && g === 0)
          throw new l.ErrnoError(6);
        if (f == null) break;
        g++, a[i + m] = f;
      }
      return g && (r.node.timestamp = Date.now()), g;
    }, write: function(r, a, i, s, o) {
      if (!r.tty || !r.tty.ops.put_char)
        throw new l.ErrnoError(60);
      try {
        for (var g = 0; g < s; g++)
          r.tty.ops.put_char(r.tty, a[i + g]);
      } catch {
        throw new l.ErrnoError(29);
      }
      return s && (r.node.timestamp = Date.now()), g;
    } }, default_tty_ops: { get_char: function(r) {
      if (!r.input.length) {
        var a = null;
        if (typeof window < "u" && typeof window.prompt == "function" ? (a = window.prompt("Input: "), a !== null && (a += `
`)) : typeof readline == "function" && (a = readline(), a !== null && (a += `
`)), !a)
          return null;
        r.input = It(a, !0);
      }
      return r.input.shift();
    }, put_char: function(r, a) {
      a === null || a === 10 ? (Oe(Ve(r.output, 0)), r.output = []) : a != 0 && r.output.push(a);
    }, fsync: function(r) {
      r.output && r.output.length > 0 && (Oe(Ve(r.output, 0)), r.output = []);
    }, ioctl_tcgets: function(r) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets: function(r, a, i) {
      return 0;
    }, ioctl_tiocgwinsz: function(r) {
      return [24, 80];
    } }, default_tty1_ops: { put_char: function(r, a) {
      a === null || a === 10 ? (Ae(Ve(r.output, 0)), r.output = []) : a != 0 && r.output.push(a);
    }, fsync: function(r) {
      r.output && r.output.length > 0 && (Ae(Ve(r.output, 0)), r.output = []);
    } } }, Zr = (r, a) => (te.fill(0, r, r + a), r), Or = (r, a) => Math.ceil(r / a) * a, bn = (r) => {
      r = Or(r, 65536);
      var a = or(65536, r);
      return a ? Zr(a, r) : 0;
    }, L = { ops_table: null, mount: function(r) {
      return L.createNode(null, "/", 16895, 0);
    }, createNode: function(r, a, i, s) {
      if (l.isBlkdev(i) || l.isFIFO(i))
        throw new l.ErrnoError(63);
      L.ops_table || (L.ops_table = { dir: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr, lookup: L.node_ops.lookup, mknod: L.node_ops.mknod, rename: L.node_ops.rename, unlink: L.node_ops.unlink, rmdir: L.node_ops.rmdir, readdir: L.node_ops.readdir, symlink: L.node_ops.symlink }, stream: { llseek: L.stream_ops.llseek } }, file: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr }, stream: { llseek: L.stream_ops.llseek, read: L.stream_ops.read, write: L.stream_ops.write, allocate: L.stream_ops.allocate, mmap: L.stream_ops.mmap, msync: L.stream_ops.msync } }, link: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr, readlink: L.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr }, stream: l.chrdev_stream_ops } });
      var o = l.createNode(r, a, i, s);
      return l.isDir(o.mode) ? (o.node_ops = L.ops_table.dir.node, o.stream_ops = L.ops_table.dir.stream, o.contents = {}) : l.isFile(o.mode) ? (o.node_ops = L.ops_table.file.node, o.stream_ops = L.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : l.isLink(o.mode) ? (o.node_ops = L.ops_table.link.node, o.stream_ops = L.ops_table.link.stream) : l.isChrdev(o.mode) && (o.node_ops = L.ops_table.chrdev.node, o.stream_ops = L.ops_table.chrdev.stream), o.timestamp = Date.now(), r && (r.contents[a] = o, r.timestamp = o.timestamp), o;
    }, getFileDataAsTypedArray: function(r) {
      return r.contents ? r.contents.subarray ? r.contents.subarray(0, r.usedBytes) : new Uint8Array(r.contents) : new Uint8Array(0);
    }, expandFileStorage: function(r, a) {
      a >>>= 0;
      var i = r.contents ? r.contents.length : 0;
      if (!(i >= a)) {
        var s = 1024 * 1024;
        a = Math.max(a, i * (i < s ? 2 : 1.125) >>> 0), i != 0 && (a = Math.max(a, 256));
        var o = r.contents;
        r.contents = new Uint8Array(a), r.usedBytes > 0 && r.contents.set(o.subarray(0, r.usedBytes), 0);
      }
    }, resizeFileStorage: function(r, a) {
      if (a >>>= 0, r.usedBytes != a)
        if (a == 0)
          r.contents = null, r.usedBytes = 0;
        else {
          var i = r.contents;
          r.contents = new Uint8Array(a), i && r.contents.set(i.subarray(0, Math.min(a, r.usedBytes))), r.usedBytes = a;
        }
    }, node_ops: { getattr: function(r) {
      var a = {};
      return a.dev = l.isChrdev(r.mode) ? r.id : 1, a.ino = r.id, a.mode = r.mode, a.nlink = 1, a.uid = 0, a.gid = 0, a.rdev = r.rdev, l.isDir(r.mode) ? a.size = 4096 : l.isFile(r.mode) ? a.size = r.usedBytes : l.isLink(r.mode) ? a.size = r.link.length : a.size = 0, a.atime = new Date(r.timestamp), a.mtime = new Date(r.timestamp), a.ctime = new Date(r.timestamp), a.blksize = 4096, a.blocks = Math.ceil(a.size / a.blksize), a;
    }, setattr: function(r, a) {
      a.mode !== void 0 && (r.mode = a.mode), a.timestamp !== void 0 && (r.timestamp = a.timestamp), a.size !== void 0 && L.resizeFileStorage(r, a.size);
    }, lookup: function(r, a) {
      throw l.genericErrors[44];
    }, mknod: function(r, a, i, s) {
      return L.createNode(r, a, i, s);
    }, rename: function(r, a, i) {
      if (l.isDir(r.mode)) {
        var s;
        try {
          s = l.lookupNode(a, i);
        } catch {
        }
        if (s)
          for (var o in s.contents)
            throw new l.ErrnoError(55);
      }
      delete r.parent.contents[r.name], r.parent.timestamp = Date.now(), r.name = i, a.contents[i] = r, a.timestamp = r.parent.timestamp, r.parent = a;
    }, unlink: function(r, a) {
      delete r.contents[a], r.timestamp = Date.now();
    }, rmdir: function(r, a) {
      var i = l.lookupNode(r, a);
      for (var s in i.contents)
        throw new l.ErrnoError(55);
      delete r.contents[a], r.timestamp = Date.now();
    }, readdir: function(r) {
      var a = [".", ".."];
      for (var i in r.contents)
        r.contents.hasOwnProperty(i) && a.push(i);
      return a;
    }, symlink: function(r, a, i) {
      var s = L.createNode(r, a, 41471, 0);
      return s.link = i, s;
    }, readlink: function(r) {
      if (!l.isLink(r.mode))
        throw new l.ErrnoError(28);
      return r.link;
    } }, stream_ops: { read: function(r, a, i, s, o) {
      var g = r.node.contents;
      if (o >= r.node.usedBytes) return 0;
      var m = Math.min(r.node.usedBytes - o, s);
      if (m > 8 && g.subarray)
        a.set(g.subarray(o, o + m), i);
      else
        for (var f = 0; f < m; f++) a[i + f] = g[o + f];
      return m;
    }, write: function(r, a, i, s, o, g) {
      if (a.buffer === V.buffer && (g = !1), !s) return 0;
      var m = r.node;
      if (m.timestamp = Date.now(), a.subarray && (!m.contents || m.contents.subarray)) {
        if (g)
          return m.contents = a.subarray(i, i + s), m.usedBytes = s, s;
        if (m.usedBytes === 0 && o === 0)
          return m.contents = a.slice(i, i + s), m.usedBytes = s, s;
        if (o + s <= m.usedBytes)
          return m.contents.set(a.subarray(i, i + s), o), s;
      }
      if (L.expandFileStorage(m, o + s), m.contents.subarray && a.subarray)
        m.contents.set(a.subarray(i, i + s), o);
      else
        for (var f = 0; f < s; f++)
          m.contents[o + f] = a[i + f];
      return m.usedBytes = Math.max(m.usedBytes, o + s), s;
    }, llseek: function(r, a, i) {
      var s = a;
      if (i === 1 ? s += r.position : i === 2 && l.isFile(r.node.mode) && (s += r.node.usedBytes), s < 0)
        throw new l.ErrnoError(28);
      return s;
    }, allocate: function(r, a, i) {
      L.expandFileStorage(r.node, a + i), r.node.usedBytes = Math.max(r.node.usedBytes, a + i);
    }, mmap: function(r, a, i, s, o) {
      if (!l.isFile(r.node.mode))
        throw new l.ErrnoError(43);
      var g, m, f = r.node.contents;
      if (!(o & 2) && f.buffer === V.buffer)
        m = !1, g = f.byteOffset;
      else {
        if ((i > 0 || i + a < f.length) && (f.subarray ? f = f.subarray(i, i + a) : f = Array.prototype.slice.call(f, i, i + a)), m = !0, g = bn(a), !g)
          throw new l.ErrnoError(48);
        g >>>= 0, V.set(f, g >>> 0);
      }
      return { ptr: g, allocated: m };
    }, msync: function(r, a, i, s, o) {
      return L.stream_ops.write(r, a, 0, s, i, !1), 0;
    } } }, ea = (r, a, i, s) => {
      var o = `al ${r}`;
      Ce(r, (g) => {
        Ar(g, `Loading data file "${r}" failed (no arrayBuffer).`), a(new Uint8Array(g)), o && vt();
      }, (g) => {
        if (i)
          i();
        else
          throw `Loading data file "${r}" failed.`;
      }), o && Ut();
    }, ta = e.preloadPlugins || [];
    function na(r, a, i, s) {
      typeof Browser < "u" && Browser.init();
      var o = !1;
      return ta.forEach(function(g) {
        o || g.canHandle(a) && (g.handle(r, a, i, s), o = !0);
      }), o;
    }
    function ra(r, a, i, s, o, g, m, f, d, y) {
      var k = a ? ye.resolve(Y.join2(r, a)) : r;
      function D(I) {
        function M(R) {
          y && y(), f || l.createDataFile(r, a, R, s, o, d), g && g(), vt();
        }
        na(I, k, M, () => {
          m && m(), vt();
        }) || M(I);
      }
      Ut(), typeof i == "string" ? ea(i, (I) => D(I), m) : D(i);
    }
    function aa(r) {
      var a = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, i = a[r];
      if (typeof i > "u")
        throw new Error(`Unknown file open mode: ${r}`);
      return i;
    }
    function jt(r, a) {
      var i = 0;
      return r && (i |= 365), a && (i |= 146), i;
    }
    var l = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (r, a = {}) => {
      if (r = ye.resolve(r), !r) return { path: "", node: null };
      var i = { follow_mount: !0, recurse_count: 0 };
      if (a = Object.assign(i, a), a.recurse_count > 8)
        throw new l.ErrnoError(32);
      for (var s = r.split("/").filter((D) => !!D), o = l.root, g = "/", m = 0; m < s.length; m++) {
        var f = m === s.length - 1;
        if (f && a.parent)
          break;
        if (o = l.lookupNode(o, s[m]), g = Y.join2(g, s[m]), l.isMountpoint(o) && (!f || f && a.follow_mount) && (o = o.mounted.root), !f || a.follow)
          for (var d = 0; l.isLink(o.mode); ) {
            var y = l.readlink(g);
            g = ye.resolve(Y.dirname(g), y);
            var k = l.lookupPath(g, { recurse_count: a.recurse_count + 1 });
            if (o = k.node, d++ > 40)
              throw new l.ErrnoError(32);
          }
      }
      return { path: g, node: o };
    }, getPath: (r) => {
      for (var a; ; ) {
        if (l.isRoot(r)) {
          var i = r.mount.mountpoint;
          return a ? i[i.length - 1] !== "/" ? `${i}/${a}` : i + a : i;
        }
        a = a ? `${r.name}/${a}` : r.name, r = r.parent;
      }
    }, hashName: (r, a) => {
      for (var i = 0, s = 0; s < a.length; s++)
        i = (i << 5) - i + a.charCodeAt(s) | 0;
      return (r + i >>> 0) % l.nameTable.length;
    }, hashAddNode: (r) => {
      var a = l.hashName(r.parent.id, r.name);
      r.name_next = l.nameTable[a], l.nameTable[a] = r;
    }, hashRemoveNode: (r) => {
      var a = l.hashName(r.parent.id, r.name);
      if (l.nameTable[a] === r)
        l.nameTable[a] = r.name_next;
      else
        for (var i = l.nameTable[a]; i; ) {
          if (i.name_next === r) {
            i.name_next = r.name_next;
            break;
          }
          i = i.name_next;
        }
    }, lookupNode: (r, a) => {
      var i = l.mayLookup(r);
      if (i)
        throw new l.ErrnoError(i, r);
      for (var s = l.hashName(r.id, a), o = l.nameTable[s]; o; o = o.name_next) {
        var g = o.name;
        if (o.parent.id === r.id && g === a)
          return o;
      }
      return l.lookup(r, a);
    }, createNode: (r, a, i, s) => {
      var o = new l.FSNode(r, a, i, s);
      return l.hashAddNode(o), o;
    }, destroyNode: (r) => {
      l.hashRemoveNode(r);
    }, isRoot: (r) => r === r.parent, isMountpoint: (r) => !!r.mounted, isFile: (r) => (r & 61440) === 32768, isDir: (r) => (r & 61440) === 16384, isLink: (r) => (r & 61440) === 40960, isChrdev: (r) => (r & 61440) === 8192, isBlkdev: (r) => (r & 61440) === 24576, isFIFO: (r) => (r & 61440) === 4096, isSocket: (r) => (r & 49152) === 49152, flagsToPermissionString: (r) => {
      var a = ["r", "w", "rw"][r & 3];
      return r & 512 && (a += "w"), a;
    }, nodePermissions: (r, a) => l.ignorePermissions ? 0 : a.includes("r") && !(r.mode & 292) || a.includes("w") && !(r.mode & 146) || a.includes("x") && !(r.mode & 73) ? 2 : 0, mayLookup: (r) => {
      var a = l.nodePermissions(r, "x");
      return a || (r.node_ops.lookup ? 0 : 2);
    }, mayCreate: (r, a) => {
      try {
        var i = l.lookupNode(r, a);
        return 20;
      } catch {
      }
      return l.nodePermissions(r, "wx");
    }, mayDelete: (r, a, i) => {
      var s;
      try {
        s = l.lookupNode(r, a);
      } catch (g) {
        return g.errno;
      }
      var o = l.nodePermissions(r, "wx");
      if (o)
        return o;
      if (i) {
        if (!l.isDir(s.mode))
          return 54;
        if (l.isRoot(s) || l.getPath(s) === l.cwd())
          return 10;
      } else if (l.isDir(s.mode))
        return 31;
      return 0;
    }, mayOpen: (r, a) => r ? l.isLink(r.mode) ? 32 : l.isDir(r.mode) && (l.flagsToPermissionString(a) !== "r" || a & 512) ? 31 : l.nodePermissions(r, l.flagsToPermissionString(a)) : 44, MAX_OPEN_FDS: 4096, nextfd: () => {
      for (var r = 0; r <= l.MAX_OPEN_FDS; r++)
        if (!l.streams[r])
          return r;
      throw new l.ErrnoError(33);
    }, getStreamChecked: (r) => {
      var a = l.getStream(r);
      if (!a)
        throw new l.ErrnoError(8);
      return a;
    }, getStream: (r) => l.streams[r], createStream: (r, a = -1) => (l.FSStream || (l.FSStream = function() {
      this.shared = {};
    }, l.FSStream.prototype = {}, Object.defineProperties(l.FSStream.prototype, { object: { get: function() {
      return this.node;
    }, set: function(i) {
      this.node = i;
    } }, isRead: { get: function() {
      return (this.flags & 2097155) !== 1;
    } }, isWrite: { get: function() {
      return (this.flags & 2097155) !== 0;
    } }, isAppend: { get: function() {
      return this.flags & 1024;
    } }, flags: { get: function() {
      return this.shared.flags;
    }, set: function(i) {
      this.shared.flags = i;
    } }, position: { get: function() {
      return this.shared.position;
    }, set: function(i) {
      this.shared.position = i;
    } } })), r = Object.assign(new l.FSStream(), r), a == -1 && (a = l.nextfd()), r.fd = a, l.streams[a] = r, r), closeStream: (r) => {
      l.streams[r] = null;
    }, chrdev_stream_ops: { open: (r) => {
      var a = l.getDevice(r.node.rdev);
      r.stream_ops = a.stream_ops, r.stream_ops.open && r.stream_ops.open(r);
    }, llseek: () => {
      throw new l.ErrnoError(70);
    } }, major: (r) => r >> 8, minor: (r) => r & 255, makedev: (r, a) => r << 8 | a, registerDevice: (r, a) => {
      l.devices[r] = { stream_ops: a };
    }, getDevice: (r) => l.devices[r], getMounts: (r) => {
      for (var a = [], i = [r]; i.length; ) {
        var s = i.pop();
        a.push(s), i.push.apply(i, s.mounts);
      }
      return a;
    }, syncfs: (r, a) => {
      typeof r == "function" && (a = r, r = !1), l.syncFSRequests++, l.syncFSRequests > 1 && Ae(`warning: ${l.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var i = l.getMounts(l.root.mount), s = 0;
      function o(m) {
        return l.syncFSRequests--, a(m);
      }
      function g(m) {
        if (m)
          return g.errored ? void 0 : (g.errored = !0, o(m));
        ++s >= i.length && o(null);
      }
      i.forEach((m) => {
        if (!m.type.syncfs)
          return g(null);
        m.type.syncfs(m, r, g);
      });
    }, mount: (r, a, i) => {
      var s = i === "/", o = !i, g;
      if (s && l.root)
        throw new l.ErrnoError(10);
      if (!s && !o) {
        var m = l.lookupPath(i, { follow_mount: !1 });
        if (i = m.path, g = m.node, l.isMountpoint(g))
          throw new l.ErrnoError(10);
        if (!l.isDir(g.mode))
          throw new l.ErrnoError(54);
      }
      var f = { type: r, opts: a, mountpoint: i, mounts: [] }, d = r.mount(f);
      return d.mount = f, f.root = d, s ? l.root = d : g && (g.mounted = f, g.mount && g.mount.mounts.push(f)), d;
    }, unmount: (r) => {
      var a = l.lookupPath(r, { follow_mount: !1 });
      if (!l.isMountpoint(a.node))
        throw new l.ErrnoError(28);
      var i = a.node, s = i.mounted, o = l.getMounts(s);
      Object.keys(l.nameTable).forEach((m) => {
        for (var f = l.nameTable[m]; f; ) {
          var d = f.name_next;
          o.includes(f.mount) && l.destroyNode(f), f = d;
        }
      }), i.mounted = null;
      var g = i.mount.mounts.indexOf(s);
      i.mount.mounts.splice(g, 1);
    }, lookup: (r, a) => r.node_ops.lookup(r, a), mknod: (r, a, i) => {
      var s = l.lookupPath(r, { parent: !0 }), o = s.node, g = Y.basename(r);
      if (!g || g === "." || g === "..")
        throw new l.ErrnoError(28);
      var m = l.mayCreate(o, g);
      if (m)
        throw new l.ErrnoError(m);
      if (!o.node_ops.mknod)
        throw new l.ErrnoError(63);
      return o.node_ops.mknod(o, g, a, i);
    }, create: (r, a) => (a = a !== void 0 ? a : 438, a &= 4095, a |= 32768, l.mknod(r, a, 0)), mkdir: (r, a) => (a = a !== void 0 ? a : 511, a &= 1023, a |= 16384, l.mknod(r, a, 0)), mkdirTree: (r, a) => {
      for (var i = r.split("/"), s = "", o = 0; o < i.length; ++o)
        if (i[o]) {
          s += "/" + i[o];
          try {
            l.mkdir(s, a);
          } catch (g) {
            if (g.errno != 20) throw g;
          }
        }
    }, mkdev: (r, a, i) => (typeof i > "u" && (i = a, a = 438), a |= 8192, l.mknod(r, a, i)), symlink: (r, a) => {
      if (!ye.resolve(r))
        throw new l.ErrnoError(44);
      var i = l.lookupPath(a, { parent: !0 }), s = i.node;
      if (!s)
        throw new l.ErrnoError(44);
      var o = Y.basename(a), g = l.mayCreate(s, o);
      if (g)
        throw new l.ErrnoError(g);
      if (!s.node_ops.symlink)
        throw new l.ErrnoError(63);
      return s.node_ops.symlink(s, o, r);
    }, rename: (r, a) => {
      var i = Y.dirname(r), s = Y.dirname(a), o = Y.basename(r), g = Y.basename(a), m, f, d;
      if (m = l.lookupPath(r, { parent: !0 }), f = m.node, m = l.lookupPath(a, { parent: !0 }), d = m.node, !f || !d) throw new l.ErrnoError(44);
      if (f.mount !== d.mount)
        throw new l.ErrnoError(75);
      var y = l.lookupNode(f, o), k = ye.relative(r, s);
      if (k.charAt(0) !== ".")
        throw new l.ErrnoError(28);
      if (k = ye.relative(a, i), k.charAt(0) !== ".")
        throw new l.ErrnoError(55);
      var D;
      try {
        D = l.lookupNode(d, g);
      } catch {
      }
      if (y !== D) {
        var I = l.isDir(y.mode), M = l.mayDelete(f, o, I);
        if (M)
          throw new l.ErrnoError(M);
        if (M = D ? l.mayDelete(d, g, I) : l.mayCreate(d, g), M)
          throw new l.ErrnoError(M);
        if (!f.node_ops.rename)
          throw new l.ErrnoError(63);
        if (l.isMountpoint(y) || D && l.isMountpoint(D))
          throw new l.ErrnoError(10);
        if (d !== f && (M = l.nodePermissions(f, "w"), M))
          throw new l.ErrnoError(M);
        l.hashRemoveNode(y);
        try {
          f.node_ops.rename(y, d, g);
        } catch (R) {
          throw R;
        } finally {
          l.hashAddNode(y);
        }
      }
    }, rmdir: (r) => {
      var a = l.lookupPath(r, { parent: !0 }), i = a.node, s = Y.basename(r), o = l.lookupNode(i, s), g = l.mayDelete(i, s, !0);
      if (g)
        throw new l.ErrnoError(g);
      if (!i.node_ops.rmdir)
        throw new l.ErrnoError(63);
      if (l.isMountpoint(o))
        throw new l.ErrnoError(10);
      i.node_ops.rmdir(i, s), l.destroyNode(o);
    }, readdir: (r) => {
      var a = l.lookupPath(r, { follow: !0 }), i = a.node;
      if (!i.node_ops.readdir)
        throw new l.ErrnoError(54);
      return i.node_ops.readdir(i);
    }, unlink: (r) => {
      var a = l.lookupPath(r, { parent: !0 }), i = a.node;
      if (!i)
        throw new l.ErrnoError(44);
      var s = Y.basename(r), o = l.lookupNode(i, s), g = l.mayDelete(i, s, !1);
      if (g)
        throw new l.ErrnoError(g);
      if (!i.node_ops.unlink)
        throw new l.ErrnoError(63);
      if (l.isMountpoint(o))
        throw new l.ErrnoError(10);
      i.node_ops.unlink(i, s), l.destroyNode(o);
    }, readlink: (r) => {
      var a = l.lookupPath(r), i = a.node;
      if (!i)
        throw new l.ErrnoError(44);
      if (!i.node_ops.readlink)
        throw new l.ErrnoError(28);
      return ye.resolve(l.getPath(i.parent), i.node_ops.readlink(i));
    }, stat: (r, a) => {
      var i = l.lookupPath(r, { follow: !a }), s = i.node;
      if (!s)
        throw new l.ErrnoError(44);
      if (!s.node_ops.getattr)
        throw new l.ErrnoError(63);
      return s.node_ops.getattr(s);
    }, lstat: (r) => l.stat(r, !0), chmod: (r, a, i) => {
      var s;
      if (typeof r == "string") {
        var o = l.lookupPath(r, { follow: !i });
        s = o.node;
      } else
        s = r;
      if (!s.node_ops.setattr)
        throw new l.ErrnoError(63);
      s.node_ops.setattr(s, { mode: a & 4095 | s.mode & -4096, timestamp: Date.now() });
    }, lchmod: (r, a) => {
      l.chmod(r, a, !0);
    }, fchmod: (r, a) => {
      var i = l.getStreamChecked(r);
      l.chmod(i.node, a);
    }, chown: (r, a, i, s) => {
      var o;
      if (typeof r == "string") {
        var g = l.lookupPath(r, { follow: !s });
        o = g.node;
      } else
        o = r;
      if (!o.node_ops.setattr)
        throw new l.ErrnoError(63);
      o.node_ops.setattr(o, { timestamp: Date.now() });
    }, lchown: (r, a, i) => {
      l.chown(r, a, i, !0);
    }, fchown: (r, a, i) => {
      var s = l.getStreamChecked(r);
      l.chown(s.node, a, i);
    }, truncate: (r, a) => {
      if (a < 0)
        throw new l.ErrnoError(28);
      var i;
      if (typeof r == "string") {
        var s = l.lookupPath(r, { follow: !0 });
        i = s.node;
      } else
        i = r;
      if (!i.node_ops.setattr)
        throw new l.ErrnoError(63);
      if (l.isDir(i.mode))
        throw new l.ErrnoError(31);
      if (!l.isFile(i.mode))
        throw new l.ErrnoError(28);
      var o = l.nodePermissions(i, "w");
      if (o)
        throw new l.ErrnoError(o);
      i.node_ops.setattr(i, { size: a, timestamp: Date.now() });
    }, ftruncate: (r, a) => {
      var i = l.getStreamChecked(r);
      if (!(i.flags & 2097155))
        throw new l.ErrnoError(28);
      l.truncate(i.node, a);
    }, utime: (r, a, i) => {
      var s = l.lookupPath(r, { follow: !0 }), o = s.node;
      o.node_ops.setattr(o, { timestamp: Math.max(a, i) });
    }, open: (r, a, i) => {
      if (r === "")
        throw new l.ErrnoError(44);
      a = typeof a == "string" ? aa(a) : a, i = typeof i > "u" ? 438 : i, a & 64 ? i = i & 4095 | 32768 : i = 0;
      var s;
      if (typeof r == "object")
        s = r;
      else {
        r = Y.normalize(r);
        try {
          var o = l.lookupPath(r, { follow: !(a & 131072) });
          s = o.node;
        } catch {
        }
      }
      var g = !1;
      if (a & 64)
        if (s) {
          if (a & 128)
            throw new l.ErrnoError(20);
        } else
          s = l.mknod(r, i, 0), g = !0;
      if (!s)
        throw new l.ErrnoError(44);
      if (l.isChrdev(s.mode) && (a &= -513), a & 65536 && !l.isDir(s.mode))
        throw new l.ErrnoError(54);
      if (!g) {
        var m = l.mayOpen(s, a);
        if (m)
          throw new l.ErrnoError(m);
      }
      a & 512 && !g && l.truncate(s, 0), a &= -131713;
      var f = l.createStream({ node: s, path: l.getPath(s), flags: a, seekable: !0, position: 0, stream_ops: s.stream_ops, ungotten: [], error: !1 });
      return f.stream_ops.open && f.stream_ops.open(f), e.logReadFiles && !(a & 1) && (l.readFiles || (l.readFiles = {}), r in l.readFiles || (l.readFiles[r] = 1)), f;
    }, close: (r) => {
      if (l.isClosed(r))
        throw new l.ErrnoError(8);
      r.getdents && (r.getdents = null);
      try {
        r.stream_ops.close && r.stream_ops.close(r);
      } catch (a) {
        throw a;
      } finally {
        l.closeStream(r.fd);
      }
      r.fd = null;
    }, isClosed: (r) => r.fd === null, llseek: (r, a, i) => {
      if (l.isClosed(r))
        throw new l.ErrnoError(8);
      if (!r.seekable || !r.stream_ops.llseek)
        throw new l.ErrnoError(70);
      if (i != 0 && i != 1 && i != 2)
        throw new l.ErrnoError(28);
      return r.position = r.stream_ops.llseek(r, a, i), r.ungotten = [], r.position;
    }, read: (r, a, i, s, o) => {
      if (i >>>= 0, s < 0 || o < 0)
        throw new l.ErrnoError(28);
      if (l.isClosed(r))
        throw new l.ErrnoError(8);
      if ((r.flags & 2097155) === 1)
        throw new l.ErrnoError(8);
      if (l.isDir(r.node.mode))
        throw new l.ErrnoError(31);
      if (!r.stream_ops.read)
        throw new l.ErrnoError(28);
      var g = typeof o < "u";
      if (!g)
        o = r.position;
      else if (!r.seekable)
        throw new l.ErrnoError(70);
      var m = r.stream_ops.read(r, a, i, s, o);
      return g || (r.position += m), m;
    }, write: (r, a, i, s, o, g) => {
      if (i >>>= 0, s < 0 || o < 0)
        throw new l.ErrnoError(28);
      if (l.isClosed(r))
        throw new l.ErrnoError(8);
      if (!(r.flags & 2097155))
        throw new l.ErrnoError(8);
      if (l.isDir(r.node.mode))
        throw new l.ErrnoError(31);
      if (!r.stream_ops.write)
        throw new l.ErrnoError(28);
      r.seekable && r.flags & 1024 && l.llseek(r, 0, 2);
      var m = typeof o < "u";
      if (!m)
        o = r.position;
      else if (!r.seekable)
        throw new l.ErrnoError(70);
      var f = r.stream_ops.write(r, a, i, s, o, g);
      return m || (r.position += f), f;
    }, allocate: (r, a, i) => {
      if (l.isClosed(r))
        throw new l.ErrnoError(8);
      if (a < 0 || i <= 0)
        throw new l.ErrnoError(28);
      if (!(r.flags & 2097155))
        throw new l.ErrnoError(8);
      if (!l.isFile(r.node.mode) && !l.isDir(r.node.mode))
        throw new l.ErrnoError(43);
      if (!r.stream_ops.allocate)
        throw new l.ErrnoError(138);
      r.stream_ops.allocate(r, a, i);
    }, mmap: (r, a, i, s, o) => {
      if (s & 2 && !(o & 2) && (r.flags & 2097155) !== 2)
        throw new l.ErrnoError(2);
      if ((r.flags & 2097155) === 1)
        throw new l.ErrnoError(2);
      if (!r.stream_ops.mmap)
        throw new l.ErrnoError(43);
      return r.stream_ops.mmap(r, a, i, s, o);
    }, msync: (r, a, i, s, o) => (i >>>= 0, r.stream_ops.msync ? r.stream_ops.msync(r, a, i, s, o) : 0), munmap: (r) => 0, ioctl: (r, a, i) => {
      if (!r.stream_ops.ioctl)
        throw new l.ErrnoError(59);
      return r.stream_ops.ioctl(r, a, i);
    }, readFile: (r, a = {}) => {
      if (a.flags = a.flags || 0, a.encoding = a.encoding || "binary", a.encoding !== "utf8" && a.encoding !== "binary")
        throw new Error(`Invalid encoding type "${a.encoding}"`);
      var i, s = l.open(r, a.flags), o = l.stat(r), g = o.size, m = new Uint8Array(g);
      return l.read(s, m, 0, g, 0), a.encoding === "utf8" ? i = Ve(m, 0) : a.encoding === "binary" && (i = m), l.close(s), i;
    }, writeFile: (r, a, i = {}) => {
      i.flags = i.flags || 577;
      var s = l.open(r, i.flags, i.mode);
      if (typeof a == "string") {
        var o = new Uint8Array(xe(a) + 1), g = Yt(a, o, 0, o.length);
        l.write(s, o, 0, g, void 0, i.canOwn);
      } else if (ArrayBuffer.isView(a))
        l.write(s, a, 0, a.byteLength, void 0, i.canOwn);
      else
        throw new Error("Unsupported data type");
      l.close(s);
    }, cwd: () => l.currentPath, chdir: (r) => {
      var a = l.lookupPath(r, { follow: !0 });
      if (a.node === null)
        throw new l.ErrnoError(44);
      if (!l.isDir(a.node.mode))
        throw new l.ErrnoError(54);
      var i = l.nodePermissions(a.node, "x");
      if (i)
        throw new l.ErrnoError(i);
      l.currentPath = a.path;
    }, createDefaultDirectories: () => {
      l.mkdir("/tmp"), l.mkdir("/home"), l.mkdir("/home/web_user");
    }, createDefaultDevices: () => {
      l.mkdir("/dev"), l.registerDevice(l.makedev(1, 3), { read: () => 0, write: (s, o, g, m, f) => m }), l.mkdev("/dev/null", l.makedev(1, 3)), ze.register(l.makedev(5, 0), ze.default_tty_ops), ze.register(l.makedev(6, 0), ze.default_tty1_ops), l.mkdev("/dev/tty", l.makedev(5, 0)), l.mkdev("/dev/tty1", l.makedev(6, 0));
      var r = new Uint8Array(1024), a = 0, i = () => (a === 0 && (a = $t(r).byteLength), r[--a]);
      l.createDevice("/dev", "random", i), l.createDevice("/dev", "urandom", i), l.mkdir("/dev/shm"), l.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: () => {
      l.mkdir("/proc");
      var r = l.mkdir("/proc/self");
      l.mkdir("/proc/self/fd"), l.mount({ mount: () => {
        var a = l.createNode(r, "fd", 16895, 73);
        return a.node_ops = { lookup: (i, s) => {
          var o = +s, g = l.getStreamChecked(o), m = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => g.path } };
          return m.parent = m, m;
        } }, a;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: () => {
      e.stdin ? l.createDevice("/dev", "stdin", e.stdin) : l.symlink("/dev/tty", "/dev/stdin"), e.stdout ? l.createDevice("/dev", "stdout", null, e.stdout) : l.symlink("/dev/tty", "/dev/stdout"), e.stderr ? l.createDevice("/dev", "stderr", null, e.stderr) : l.symlink("/dev/tty1", "/dev/stderr"), l.open("/dev/stdin", 0), l.open("/dev/stdout", 1), l.open("/dev/stderr", 1);
    }, ensureErrnoError: () => {
      l.ErrnoError || (l.ErrnoError = function(a, i) {
        this.name = "ErrnoError", this.node = i, this.setErrno = function(s) {
          this.errno = s;
        }, this.setErrno(a), this.message = "FS error";
      }, l.ErrnoError.prototype = new Error(), l.ErrnoError.prototype.constructor = l.ErrnoError, [44].forEach((r) => {
        l.genericErrors[r] = new l.ErrnoError(r), l.genericErrors[r].stack = "<generic error, no stack>";
      }));
    }, staticInit: () => {
      l.ensureErrnoError(), l.nameTable = new Array(4096), l.mount(L, {}, "/"), l.createDefaultDirectories(), l.createDefaultDevices(), l.createSpecialDirectories(), l.filesystems = { MEMFS: L };
    }, init: (r, a, i) => {
      l.init.initialized = !0, l.ensureErrnoError(), e.stdin = r || e.stdin, e.stdout = a || e.stdout, e.stderr = i || e.stderr, l.createStandardStreams();
    }, quit: () => {
      l.init.initialized = !1;
      for (var r = 0; r < l.streams.length; r++) {
        var a = l.streams[r];
        a && l.close(a);
      }
    }, findObject: (r, a) => {
      var i = l.analyzePath(r, a);
      return i.exists ? i.object : null;
    }, analyzePath: (r, a) => {
      try {
        var i = l.lookupPath(r, { follow: !a });
        r = i.path;
      } catch {
      }
      var s = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var i = l.lookupPath(r, { parent: !0 });
        s.parentExists = !0, s.parentPath = i.path, s.parentObject = i.node, s.name = Y.basename(r), i = l.lookupPath(r, { follow: !a }), s.exists = !0, s.path = i.path, s.object = i.node, s.name = i.node.name, s.isRoot = i.path === "/";
      } catch (o) {
        s.error = o.errno;
      }
      return s;
    }, createPath: (r, a, i, s) => {
      r = typeof r == "string" ? r : l.getPath(r);
      for (var o = a.split("/").reverse(); o.length; ) {
        var g = o.pop();
        if (g) {
          var m = Y.join2(r, g);
          try {
            l.mkdir(m);
          } catch {
          }
          r = m;
        }
      }
      return m;
    }, createFile: (r, a, i, s, o) => {
      var g = Y.join2(typeof r == "string" ? r : l.getPath(r), a), m = jt(s, o);
      return l.create(g, m);
    }, createDataFile: (r, a, i, s, o, g) => {
      var m = a;
      r && (r = typeof r == "string" ? r : l.getPath(r), m = a ? Y.join2(r, a) : r);
      var f = jt(s, o), d = l.create(m, f);
      if (i) {
        if (typeof i == "string") {
          for (var y = new Array(i.length), k = 0, D = i.length; k < D; ++k) y[k] = i.charCodeAt(k);
          i = y;
        }
        l.chmod(d, f | 146);
        var I = l.open(d, 577);
        l.write(I, i, 0, i.length, 0, g), l.close(I), l.chmod(d, f);
      }
      return d;
    }, createDevice: (r, a, i, s) => {
      var o = Y.join2(typeof r == "string" ? r : l.getPath(r), a), g = jt(!!i, !!s);
      l.createDevice.major || (l.createDevice.major = 64);
      var m = l.makedev(l.createDevice.major++, 0);
      return l.registerDevice(m, { open: (f) => {
        f.seekable = !1;
      }, close: (f) => {
        s && s.buffer && s.buffer.length && s(10);
      }, read: (f, d, y, k, D) => {
        for (var I = 0, M = 0; M < k; M++) {
          var R;
          try {
            R = i();
          } catch {
            throw new l.ErrnoError(29);
          }
          if (R === void 0 && I === 0)
            throw new l.ErrnoError(6);
          if (R == null) break;
          I++, d[y + M] = R;
        }
        return I && (f.node.timestamp = Date.now()), I;
      }, write: (f, d, y, k, D) => {
        for (var I = 0; I < k; I++)
          try {
            s(d[y + I]);
          } catch {
            throw new l.ErrnoError(29);
          }
        return k && (f.node.timestamp = Date.now()), I;
      } }), l.mkdev(o, g, m);
    }, forceLoadFile: (r) => {
      if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      if (he)
        try {
          r.contents = It(he(r.url), !0), r.usedBytes = r.contents.length;
        } catch {
          throw new l.ErrnoError(29);
        }
      else
        throw new Error("Cannot load without read() or XMLHttpRequest.");
    }, createLazyFile: (r, a, i, s, o) => {
      function g() {
        this.lengthKnown = !1, this.chunks = [];
      }
      if (g.prototype.get = function(M) {
        if (!(M > this.length - 1 || M < 0)) {
          var R = M % this.chunkSize, F = M / this.chunkSize | 0;
          return this.getter(F)[R];
        }
      }, g.prototype.setDataGetter = function(M) {
        this.getter = M;
      }, g.prototype.cacheLength = function() {
        var M = new XMLHttpRequest();
        if (M.open("HEAD", i, !1), M.send(null), !(M.status >= 200 && M.status < 300 || M.status === 304)) throw new Error("Couldn't load " + i + ". Status: " + M.status);
        var R = Number(M.getResponseHeader("Content-length")), F, q = (F = M.getResponseHeader("Accept-Ranges")) && F === "bytes", j = (F = M.getResponseHeader("Content-Encoding")) && F === "gzip", v = 1024 * 1024;
        q || (v = R);
        var P = (X, _e) => {
          if (X > _e) throw new Error("invalid range (" + X + ", " + _e + ") or no bytes requested!");
          if (_e > R - 1) throw new Error("only " + R + " bytes available! programmer error!");
          var Z = new XMLHttpRequest();
          if (Z.open("GET", i, !1), R !== v && Z.setRequestHeader("Range", "bytes=" + X + "-" + _e), Z.responseType = "arraybuffer", Z.overrideMimeType && Z.overrideMimeType("text/plain; charset=x-user-defined"), Z.send(null), !(Z.status >= 200 && Z.status < 300 || Z.status === 304)) throw new Error("Couldn't load " + i + ". Status: " + Z.status);
          return Z.response !== void 0 ? new Uint8Array(Z.response || []) : It(Z.responseText || "", !0);
        }, O = this;
        O.setDataGetter((X) => {
          var _e = X * v, Z = (X + 1) * v - 1;
          if (Z = Math.min(Z, R - 1), typeof O.chunks[X] > "u" && (O.chunks[X] = P(_e, Z)), typeof O.chunks[X] > "u") throw new Error("doXHR failed!");
          return O.chunks[X];
        }), (j || !R) && (v = R = 1, R = this.getter(0).length, v = R, Oe("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = R, this._chunkSize = v, this.lengthKnown = !0;
      }, typeof XMLHttpRequest < "u") {
        if (!T) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var m = new g();
        Object.defineProperties(m, { length: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._length;
        } }, chunkSize: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        } } });
        var f = { isDevice: !1, contents: m };
      } else
        var f = { isDevice: !1, url: i };
      var d = l.createFile(r, a, f, s, o);
      f.contents ? d.contents = f.contents : f.url && (d.contents = null, d.url = f.url), Object.defineProperties(d, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var y = {}, k = Object.keys(d.stream_ops);
      k.forEach((I) => {
        var M = d.stream_ops[I];
        y[I] = function() {
          return l.forceLoadFile(d), M.apply(null, arguments);
        };
      });
      function D(I, M, R, F, q) {
        var j = I.node.contents;
        if (q >= j.length) return 0;
        var v = Math.min(j.length - q, F);
        if (j.slice)
          for (var P = 0; P < v; P++)
            M[R + P] = j[q + P];
        else
          for (var P = 0; P < v; P++)
            M[R + P] = j.get(q + P);
        return v;
      }
      return y.read = (I, M, R, F, q) => (l.forceLoadFile(d), D(I, M, R, F, q)), y.mmap = (I, M, R, F, q) => {
        l.forceLoadFile(d);
        var j = bn(M);
        if (!j)
          throw new l.ErrnoError(48);
        return D(I, V, j, M, R), { ptr: j, allocated: !0 };
      }, d.stream_ops = y, d;
    } }, at = (r, a) => (r >>>= 0, r ? Ve(te, r, a) : ""), C = { DEFAULT_POLLMASK: 5, calculateAt: function(r, a, i) {
      if (Y.isAbs(a))
        return a;
      var s;
      if (r === -100)
        s = l.cwd();
      else {
        var o = C.getStreamFromFD(r);
        s = o.path;
      }
      if (a.length == 0) {
        if (!i)
          throw new l.ErrnoError(44);
        return s;
      }
      return Y.join2(s, a);
    }, doStat: function(r, a, i) {
      try {
        var s = r(a);
      } catch (f) {
        if (f && f.node && Y.normalize(a) !== Y.normalize(l.getPath(f.node)))
          return -54;
        throw f;
      }
      G[i >>> 2] = s.dev, G[i + 4 >>> 2] = s.mode, W[i + 8 >>> 2] = s.nlink, G[i + 12 >>> 2] = s.uid, G[i + 16 >>> 2] = s.gid, G[i + 20 >>> 2] = s.rdev, oe[i + 24 >> 3] = BigInt(s.size), G[i + 32 >>> 2] = 4096, G[i + 36 >>> 2] = s.blocks;
      var o = s.atime.getTime(), g = s.mtime.getTime(), m = s.ctime.getTime();
      return oe[i + 40 >> 3] = BigInt(Math.floor(o / 1e3)), W[i + 48 >>> 2] = o % 1e3 * 1e3, oe[i + 56 >> 3] = BigInt(Math.floor(g / 1e3)), W[i + 64 >>> 2] = g % 1e3 * 1e3, oe[i + 72 >> 3] = BigInt(Math.floor(m / 1e3)), W[i + 80 >>> 2] = m % 1e3 * 1e3, oe[i + 88 >> 3] = BigInt(s.ino), 0;
    }, doMsync: function(r, a, i, s, o) {
      if (!l.isFile(a.node.mode))
        throw new l.ErrnoError(43);
      if (s & 2)
        return 0;
      r >>>= 0;
      var g = te.slice(r, r + i);
      l.msync(a, g, o, i, s);
    }, varargs: void 0, get: function() {
      C.varargs += 4;
      var r = G[C.varargs - 4 >>> 2];
      return r;
    }, getStr: function(r) {
      var a = at(r);
      return a;
    }, getStreamFromFD: function(r) {
      var a = l.getStreamChecked(r);
      return a;
    } };
    function ia(r, a) {
      try {
        return r = C.getStr(r), l.chmod(r, a), 0;
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function sa(r, a, i, s) {
      try {
        if (a = C.getStr(a), a = C.calculateAt(r, a), i & -8)
          return -28;
        var o = l.lookupPath(a, { follow: !0 }), g = o.node;
        if (!g)
          return -44;
        var m = "";
        return i & 4 && (m += "r"), i & 2 && (m += "w"), i & 1 && (m += "x"), m && l.nodePermissions(g, m) ? -2 : 0;
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    var ua = 9007199254740992, oa = -9007199254740992;
    function Ne(r) {
      return r < oa || r > ua ? NaN : Number(r);
    }
    function _a(r, a, i, s) {
      try {
        if (i = Ne(i), isNaN(i) || (s = Ne(s), isNaN(s))) return -61;
        var o = C.getStreamFromFD(r);
        return l.allocate(o, i, s), 0;
      } catch (g) {
        if (typeof l > "u" || g.name !== "ErrnoError") throw g;
        return -g.errno;
      }
    }
    function la(r, a) {
      try {
        return l.fchmod(r, a), 0;
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    var Gn = (r) => (G[sr() >>> 2] = r, r);
    function ca(r, a, i) {
      C.varargs = i;
      try {
        var s = C.getStreamFromFD(r);
        switch (a) {
          case 0: {
            var o = C.get();
            if (o < 0)
              return -28;
            var g;
            return g = l.createStream(s, o), g.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return s.flags;
          case 4: {
            var o = C.get();
            return s.flags |= o, 0;
          }
          case 5: {
            var o = C.get(), m = 0;
            return ue[o + m >>> 1] = 2, 0;
          }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            return Gn(28), -1;
          default:
            return -28;
        }
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    function ga(r, a) {
      try {
        var i = C.getStreamFromFD(r);
        return C.doStat(l.stat, i.path, a);
      } catch (s) {
        if (typeof l > "u" || s.name !== "ErrnoError") throw s;
        return -s.errno;
      }
    }
    var qe = (r, a, i) => Yt(r, te, a, i);
    function ma(r, a) {
      try {
        if (a === 0) return -28;
        var i = l.cwd(), s = xe(i) + 1;
        return a < s ? -68 : (qe(i, r, a), s);
      } catch (o) {
        if (typeof l > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function fa(r, a, i) {
      try {
        var s = C.getStreamFromFD(r);
        s.getdents || (s.getdents = l.readdir(s.path));
        for (var o = 280, g = 0, m = l.llseek(s, 0, 1), f = Math.floor(m / o); f < s.getdents.length && g + o <= i; ) {
          var d, y, k = s.getdents[f];
          if (k === ".")
            d = s.node.id, y = 4;
          else if (k === "..") {
            var D = l.lookupPath(s.path, { parent: !0 });
            d = D.node.id, y = 4;
          } else {
            var I = l.lookupNode(s.node, k);
            d = I.id, y = l.isChrdev(I.mode) ? 2 : l.isDir(I.mode) ? 4 : l.isLink(I.mode) ? 10 : 8;
          }
          oe[a + g >> 3] = BigInt(d), oe[a + g + 8 >> 3] = BigInt((f + 1) * o), ue[a + g + 16 >>> 1] = 280, V[a + g + 18 >>> 0] = y, qe(k, a + g + 19, 256), g += o, f += 1;
        }
        return l.llseek(s, f * o, 0), g;
      } catch (M) {
        if (typeof l > "u" || M.name !== "ErrnoError") throw M;
        return -M.errno;
      }
    }
    function pa(r, a, i) {
      C.varargs = i;
      try {
        var s = C.getStreamFromFD(r);
        switch (a) {
          case 21509:
            return s.tty ? 0 : -59;
          case 21505: {
            if (!s.tty) return -59;
            if (s.tty.ops.ioctl_tcgets) {
              var o = s.tty.ops.ioctl_tcgets(s), g = C.get();
              G[g >>> 2] = o.c_iflag || 0, G[g + 4 >>> 2] = o.c_oflag || 0, G[g + 8 >>> 2] = o.c_cflag || 0, G[g + 12 >>> 2] = o.c_lflag || 0;
              for (var m = 0; m < 32; m++)
                V[g + m + 17 >>> 0] = o.c_cc[m] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return s.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!s.tty) return -59;
            if (s.tty.ops.ioctl_tcsets) {
              for (var g = C.get(), f = G[g >>> 2], d = G[g + 4 >>> 2], y = G[g + 8 >>> 2], k = G[g + 12 >>> 2], D = [], m = 0; m < 32; m++)
                D.push(V[g + m + 17 >>> 0]);
              return s.tty.ops.ioctl_tcsets(s.tty, a, { c_iflag: f, c_oflag: d, c_cflag: y, c_lflag: k, c_cc: D });
            }
            return 0;
          }
          case 21519: {
            if (!s.tty) return -59;
            var g = C.get();
            return G[g >>> 2] = 0, 0;
          }
          case 21520:
            return s.tty ? -28 : -59;
          case 21531: {
            var g = C.get();
            return l.ioctl(s, a, g);
          }
          case 21523: {
            if (!s.tty) return -59;
            if (s.tty.ops.ioctl_tiocgwinsz) {
              var I = s.tty.ops.ioctl_tiocgwinsz(s.tty), g = C.get();
              ue[g >>> 1] = I[0], ue[g + 2 >>> 1] = I[1];
            }
            return 0;
          }
          case 21524:
            return s.tty ? 0 : -59;
          case 21515:
            return s.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (M) {
        if (typeof l > "u" || M.name !== "ErrnoError") throw M;
        return -M.errno;
      }
    }
    function ha(r, a) {
      try {
        return r = C.getStr(r), C.doStat(l.lstat, r, a);
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function da(r, a, i, s) {
      try {
        a = C.getStr(a);
        var o = s & 256, g = s & 4096;
        return s = s & -6401, a = C.calculateAt(r, a, g), C.doStat(o ? l.lstat : l.stat, a, i);
      } catch (m) {
        if (typeof l > "u" || m.name !== "ErrnoError") throw m;
        return -m.errno;
      }
    }
    function ya(r, a, i, s) {
      C.varargs = s;
      try {
        a = C.getStr(a), a = C.calculateAt(r, a);
        var o = s ? C.get() : 0;
        return l.open(a, i, o).fd;
      } catch (g) {
        if (typeof l > "u" || g.name !== "ErrnoError") throw g;
        return -g.errno;
      }
    }
    function wa(r, a, i, s) {
      try {
        if (a = C.getStr(a), a = C.calculateAt(r, a), s <= 0) return -28;
        var o = l.readlink(a), g = Math.min(s, xe(o)), m = V[i + g >>> 0];
        return qe(o, i, s + 1), V[i + g >>> 0] = m, g;
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    function Sa(r, a, i, s) {
      try {
        return a = C.getStr(a), s = C.getStr(s), a = C.calculateAt(r, a), s = C.calculateAt(i, s), l.rename(a, s), 0;
      } catch (o) {
        if (typeof l > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function ka(r) {
      try {
        return r = C.getStr(r), l.rmdir(r), 0;
      } catch (a) {
        if (typeof l > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function va(r, a) {
      try {
        return r = C.getStr(r), C.doStat(l.stat, r, a);
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function Ia(r, a) {
      try {
        return r = C.getStr(r), a = C.getStr(a), l.symlink(r, a), 0;
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function Ma(r, a, i) {
      try {
        return a = C.getStr(a), a = C.calculateAt(r, a), i === 0 ? l.unlink(a) : i === 512 ? l.rmdir(a) : de("Invalid flags passed to unlinkat"), 0;
      } catch (s) {
        if (typeof l > "u" || s.name !== "ErrnoError") throw s;
        return -s.errno;
      }
    }
    var Mt = {};
    function Pn(r) {
      for (; r.length; ) {
        var a = r.pop(), i = r.pop();
        i(a);
      }
    }
    function it(r) {
      return this.fromWireType(G[r >>> 2]);
    }
    var Qe = {}, He = {}, Dt = {}, Da = 48, ba = 57;
    function bt(r) {
      if (r === void 0)
        return "_unknown";
      r = r.replace(/[^a-zA-Z0-9_]/g, "$");
      var a = r.charCodeAt(0);
      return a >= Da && a <= ba ? `_${r}` : r;
    }
    function Gt(r, a) {
      return r = bt(r), { [r]: function() {
        return a.apply(this, arguments);
      } }[r];
    }
    function Xt(r, a) {
      var i = Gt(a, function(s) {
        this.name = a, this.message = s;
        var o = new Error(s).stack;
        o !== void 0 && (this.stack = this.toString() + `
` + o.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, i;
    }
    var Cn = void 0;
    function Pt(r) {
      throw new Cn(r);
    }
    function Vt(r, a, i) {
      r.forEach(function(f) {
        Dt[f] = a;
      });
      function s(f) {
        var d = i(f);
        d.length !== r.length && Pt("Mismatched type converter count");
        for (var y = 0; y < r.length; ++y)
          fe(r[y], d[y]);
      }
      var o = new Array(a.length), g = [], m = 0;
      a.forEach((f, d) => {
        He.hasOwnProperty(f) ? o[d] = He[f] : (g.push(f), Qe.hasOwnProperty(f) || (Qe[f] = []), Qe[f].push(() => {
          o[d] = He[f], ++m, m === g.length && s(o);
        }));
      }), g.length === 0 && s(o);
    }
    var Ga = function(r) {
      var a = Mt[r];
      delete Mt[r];
      var i = a.rawConstructor, s = a.rawDestructor, o = a.fields, g = o.map((m) => m.getterReturnType).concat(o.map((m) => m.setterArgumentType));
      Vt([r], g, (m) => {
        var f = {};
        return o.forEach((d, y) => {
          var k = d.fieldName, D = m[y], I = d.getter, M = d.getterContext, R = m[y + o.length], F = d.setter, q = d.setterContext;
          f[k] = { read: (j) => D.fromWireType(I(M, j)), write: (j, v) => {
            var P = [];
            F(q, j, R.toWireType(P, v)), Pn(P);
          } };
        }), [{ name: a.name, fromWireType: function(d) {
          var y = {};
          for (var k in f)
            y[k] = f[k].read(d);
          return s(d), y;
        }, toWireType: function(d, y) {
          for (var k in f)
            if (!(k in y))
              throw new TypeError(`Missing field: "${k}"`);
          var D = i();
          for (k in f)
            f[k].write(D, y[k]);
          return d !== null && d.push(s, D), D;
        }, argPackAdvance: 8, readValueFromPointer: it, destructorFunction: s }];
      });
    };
    function st(r) {
      if (r === null)
        return "null";
      var a = typeof r;
      return a === "object" || a === "array" || a === "function" ? r.toString() : "" + r;
    }
    function Pa() {
      for (var r = new Array(256), a = 0; a < 256; ++a)
        r[a] = String.fromCharCode(a);
      An = r;
    }
    var An = void 0;
    function ee(r) {
      for (var a = "", i = r; te[i >>> 0]; )
        a += An[te[i++ >>> 0]];
      return a;
    }
    var ut = void 0;
    function z(r) {
      throw new ut(r);
    }
    function fe(r, a, i = {}) {
      if (!("argPackAdvance" in a))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var s = a.name;
      if (r || z(`type "${s}" must have a positive integer typeid pointer`), He.hasOwnProperty(r)) {
        if (i.ignoreDuplicateRegistrations)
          return;
        z(`Cannot register type '${s}' twice`);
      }
      if (He[r] = a, delete Dt[r], Qe.hasOwnProperty(r)) {
        var o = Qe[r];
        delete Qe[r], o.forEach((g) => g());
      }
    }
    function Rn(r, a, i) {
      switch (a) {
        case 0:
          return i ? function(o) {
            return V[o >>> 0];
          } : function(o) {
            return te[o >>> 0];
          };
        case 1:
          return i ? function(o) {
            return ue[o >>> 1];
          } : function(o) {
            return tt[o >>> 1];
          };
        case 2:
          return i ? function(o) {
            return G[o >>> 2];
          } : function(o) {
            return W[o >>> 2];
          };
        case 3:
          return i ? function(o) {
            return oe[o >> 3];
          } : function(o) {
            return pn[o >> 3];
          };
        default:
          throw new TypeError("Unknown integer type: " + r);
      }
    }
    function Ca(r, a, i, s, o) {
      a = ee(a);
      var g = ot(i), m = a.indexOf("u") != -1;
      m && (o = (1n << 64n) - 1n), fe(r, { name: a, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, d) {
        if (typeof d != "bigint" && typeof d != "number")
          throw new TypeError(`Cannot convert "${st(d)}" to ${this.name}`);
        if (d < s || d > o)
          throw new TypeError(`Passing a number "${st(d)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${s}, ${o}]!`);
        return d;
      }, argPackAdvance: 8, readValueFromPointer: Rn(a, g, !m), destructorFunction: null });
    }
    function ot(r) {
      switch (r) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError(`Unknown type size: ${r}`);
      }
    }
    function Aa(r, a, i, s, o) {
      var g = ot(i);
      a = ee(a), fe(r, { name: a, fromWireType: function(m) {
        return !!m;
      }, toWireType: function(m, f) {
        return f ? s : o;
      }, argPackAdvance: 8, readValueFromPointer: function(m) {
        var f;
        if (i === 1)
          f = V;
        else if (i === 2)
          f = ue;
        else if (i === 4)
          f = G;
        else
          throw new TypeError("Unknown boolean type size: " + a);
        return this.fromWireType(f[m >>> g]);
      }, destructorFunction: null });
    }
    function Ra(r) {
      if (!(this instanceof Re) || !(r instanceof Re))
        return !1;
      for (var a = this.$$.ptrType.registeredClass, i = this.$$.ptr, s = r.$$.ptrType.registeredClass, o = r.$$.ptr; a.baseClass; )
        i = a.upcast(i), a = a.baseClass;
      for (; s.baseClass; )
        o = s.upcast(o), s = s.baseClass;
      return a === s && i === o;
    }
    function Ea(r) {
      return { count: r.count, deleteScheduled: r.deleteScheduled, preservePointerOnDelete: r.preservePointerOnDelete, ptr: r.ptr, ptrType: r.ptrType, smartPtr: r.smartPtr, smartPtrType: r.smartPtrType };
    }
    function qt(r) {
      function a(i) {
        return i.$$.ptrType.registeredClass.name;
      }
      z(a(r) + " instance already deleted");
    }
    var Qt = !1;
    function En(r) {
    }
    function Ta(r) {
      r.smartPtr ? r.smartPtrType.rawDestructor(r.smartPtr) : r.ptrType.registeredClass.rawDestructor(r.ptr);
    }
    function Tn(r) {
      r.count.value -= 1;
      var a = r.count.value === 0;
      a && Ta(r);
    }
    function Wn(r, a, i) {
      if (a === i)
        return r;
      if (i.baseClass === void 0)
        return null;
      var s = Wn(r, a, i.baseClass);
      return s === null ? null : i.downcast(s);
    }
    var Ln = {};
    function Wa() {
      return Object.keys(ct).length;
    }
    function La() {
      var r = [];
      for (var a in ct)
        ct.hasOwnProperty(a) && r.push(ct[a]);
      return r;
    }
    var _t = [];
    function Jt() {
      for (; _t.length; ) {
        var r = _t.pop();
        r.$$.deleteScheduled = !1, r.delete();
      }
    }
    var lt = void 0;
    function Ba(r) {
      lt = r, _t.length && lt && lt(Jt);
    }
    function xa() {
      e.getInheritedInstanceCount = Wa, e.getLiveInheritedInstances = La, e.flushPendingDeletes = Jt, e.setDelayFunction = Ba;
    }
    var ct = {};
    function za(r, a) {
      for (a === void 0 && z("ptr should not be undefined"); r.baseClass; )
        a = r.upcast(a), r = r.baseClass;
      return a;
    }
    function Na(r, a) {
      return a = za(r, a), ct[a];
    }
    function Ct(r, a) {
      (!a.ptrType || !a.ptr) && Pt("makeClassHandle requires ptr and ptrType");
      var i = !!a.smartPtrType, s = !!a.smartPtr;
      return i !== s && Pt("Both smartPtrType and smartPtr must be specified"), a.count = { value: 1 }, gt(Object.create(r, { $$: { value: a } }));
    }
    function Ha(r) {
      var a = this.getPointee(r);
      if (!a)
        return this.destructor(r), null;
      var i = Na(this.registeredClass, a);
      if (i !== void 0) {
        if (i.$$.count.value === 0)
          return i.$$.ptr = a, i.$$.smartPtr = r, i.clone();
        var s = i.clone();
        return this.destructor(r), s;
      }
      function o() {
        return this.isSmartPointer ? Ct(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: a, smartPtrType: this, smartPtr: r }) : Ct(this.registeredClass.instancePrototype, { ptrType: this, ptr: r });
      }
      var g = this.registeredClass.getActualType(a), m = Ln[g];
      if (!m)
        return o.call(this);
      var f;
      this.isConst ? f = m.constPointerType : f = m.pointerType;
      var d = Wn(a, this.registeredClass, f.registeredClass);
      return d === null ? o.call(this) : this.isSmartPointer ? Ct(f.registeredClass.instancePrototype, { ptrType: f, ptr: d, smartPtrType: this, smartPtr: r }) : Ct(f.registeredClass.instancePrototype, { ptrType: f, ptr: d });
    }
    var gt = function(r) {
      return typeof FinalizationRegistry > "u" ? (gt = (a) => a, r) : (Qt = new FinalizationRegistry((a) => {
        Tn(a.$$);
      }), gt = (a) => {
        var i = a.$$, s = !!i.smartPtr;
        if (s) {
          var o = { $$: i };
          Qt.register(a, o, a);
        }
        return a;
      }, En = (a) => Qt.unregister(a), gt(r));
    };
    function Ua() {
      if (this.$$.ptr || qt(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var r = gt(Object.create(Object.getPrototypeOf(this), { $$: { value: Ea(this.$$) } }));
      return r.$$.count.value += 1, r.$$.deleteScheduled = !1, r;
    }
    function Fa() {
      this.$$.ptr || qt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && z("Object already scheduled for deletion"), En(this), Tn(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }
    function $a() {
      return !this.$$.ptr;
    }
    function Ya() {
      return this.$$.ptr || qt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && z("Object already scheduled for deletion"), _t.push(this), _t.length === 1 && lt && lt(Jt), this.$$.deleteScheduled = !0, this;
    }
    function ja() {
      Re.prototype.isAliasOf = Ra, Re.prototype.clone = Ua, Re.prototype.delete = Fa, Re.prototype.isDeleted = $a, Re.prototype.deleteLater = Ya;
    }
    function Re() {
    }
    function Xa(r, a, i) {
      if (r[a].overloadTable === void 0) {
        var s = r[a];
        r[a] = function() {
          return r[a].overloadTable.hasOwnProperty(arguments.length) || z(`Function '${i}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[a].overloadTable})!`), r[a].overloadTable[arguments.length].apply(this, arguments);
        }, r[a].overloadTable = [], r[a].overloadTable[s.argCount] = s;
      }
    }
    function Kt(r, a, i) {
      e.hasOwnProperty(r) ? ((i === void 0 || e[r].overloadTable !== void 0 && e[r].overloadTable[i] !== void 0) && z(`Cannot register public name '${r}' twice`), Xa(e, r, r), e.hasOwnProperty(i) && z(`Cannot register multiple overloads of a function with the same number of arguments (${i})!`), e[r].overloadTable[i] = a) : (e[r] = a, i !== void 0 && (e[r].numArguments = i));
    }
    function Va(r, a, i, s, o, g, m, f) {
      this.name = r, this.constructor = a, this.instancePrototype = i, this.rawDestructor = s, this.baseClass = o, this.getActualType = g, this.upcast = m, this.downcast = f, this.pureVirtualFunctions = [];
    }
    function Zt(r, a, i) {
      for (; a !== i; )
        a.upcast || z(`Expected null or instance of ${i.name}, got an instance of ${a.name}`), r = a.upcast(r), a = a.baseClass;
      return r;
    }
    function qa(r, a) {
      if (a === null)
        return this.isReference && z(`null is not a valid ${this.name}`), 0;
      a.$$ || z(`Cannot pass "${st(a)}" as a ${this.name}`), a.$$.ptr || z(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var i = a.$$.ptrType.registeredClass, s = Zt(a.$$.ptr, i, this.registeredClass);
      return s;
    }
    function Qa(r, a) {
      var i;
      if (a === null)
        return this.isReference && z(`null is not a valid ${this.name}`), this.isSmartPointer ? (i = this.rawConstructor(), r !== null && r.push(this.rawDestructor, i), i) : 0;
      a.$$ || z(`Cannot pass "${st(a)}" as a ${this.name}`), a.$$.ptr || z(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && a.$$.ptrType.isConst && z(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
      var s = a.$$.ptrType.registeredClass;
      if (i = Zt(a.$$.ptr, s, this.registeredClass), this.isSmartPointer)
        switch (a.$$.smartPtr === void 0 && z("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            a.$$.smartPtrType === this ? i = a.$$.smartPtr : z(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
            break;
          case 1:
            i = a.$$.smartPtr;
            break;
          case 2:
            if (a.$$.smartPtrType === this)
              i = a.$$.smartPtr;
            else {
              var o = a.clone();
              i = this.rawShare(i, pe.toHandle(function() {
                o.delete();
              })), r !== null && r.push(this.rawDestructor, i);
            }
            break;
          default:
            z("Unsupporting sharing policy");
        }
      return i;
    }
    function Ja(r, a) {
      if (a === null)
        return this.isReference && z(`null is not a valid ${this.name}`), 0;
      a.$$ || z(`Cannot pass "${st(a)}" as a ${this.name}`), a.$$.ptr || z(`Cannot pass deleted object as a pointer of type ${this.name}`), a.$$.ptrType.isConst && z(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);
      var i = a.$$.ptrType.registeredClass, s = Zt(a.$$.ptr, i, this.registeredClass);
      return s;
    }
    function Ka(r) {
      return this.rawGetPointee && (r = this.rawGetPointee(r)), r;
    }
    function Za(r) {
      this.rawDestructor && this.rawDestructor(r);
    }
    function Oa(r) {
      r !== null && r.delete();
    }
    function ei() {
      we.prototype.getPointee = Ka, we.prototype.destructor = Za, we.prototype.argPackAdvance = 8, we.prototype.readValueFromPointer = it, we.prototype.deleteObject = Oa, we.prototype.fromWireType = Ha;
    }
    function we(r, a, i, s, o, g, m, f, d, y, k) {
      this.name = r, this.registeredClass = a, this.isReference = i, this.isConst = s, this.isSmartPointer = o, this.pointeeType = g, this.sharingPolicy = m, this.rawGetPointee = f, this.rawConstructor = d, this.rawShare = y, this.rawDestructor = k, !o && a.baseClass === void 0 ? s ? (this.toWireType = qa, this.destructorFunction = null) : (this.toWireType = Ja, this.destructorFunction = null) : this.toWireType = Qa;
    }
    function Bn(r, a, i) {
      e.hasOwnProperty(r) || Pt("Replacing nonexistant public symbol"), e[r].overloadTable !== void 0 && i !== void 0 ? e[r].overloadTable[i] = a : (e[r] = a, e[r].argCount = i);
    }
    function Se(r, a) {
      r = ee(r);
      function i() {
        return x(a);
      }
      var s = i();
      return typeof s != "function" && z(`unknown function pointer with signature ${r}: ${a}`), s;
    }
    var xn = void 0;
    function zn(r) {
      var a = ur(r), i = ee(a);
      return ke(a), i;
    }
    function Nn(r, a) {
      var i = [], s = {};
      function o(g) {
        if (!s[g] && !He[g]) {
          if (Dt[g]) {
            Dt[g].forEach(o);
            return;
          }
          i.push(g), s[g] = !0;
        }
      }
      throw a.forEach(o), new xn(`${r}: ` + i.map(zn).join([", "]));
    }
    function ti(r, a, i, s, o, g, m, f, d, y, k, D, I) {
      k = ee(k), g = Se(o, g), f && (f = Se(m, f)), y && (y = Se(d, y)), I = Se(D, I);
      var M = bt(k);
      Kt(M, function() {
        Nn(`Cannot construct ${k} due to unbound types`, [s]);
      }), Vt([r, a, i], s ? [s] : [], function(R) {
        R = R[0];
        var F, q;
        s ? (F = R.registeredClass, q = F.instancePrototype) : q = Re.prototype;
        var j = Gt(M, function() {
          if (Object.getPrototypeOf(this) !== v)
            throw new ut("Use 'new' to construct " + k);
          if (P.constructor_body === void 0)
            throw new ut(k + " has no accessible constructor");
          var Z = P.constructor_body[arguments.length];
          if (Z === void 0)
            throw new ut(`Tried to invoke ctor of ${k} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(P.constructor_body).toString()}) parameters instead!`);
          return Z.apply(this, arguments);
        }), v = Object.create(q, { constructor: { value: j } });
        j.prototype = v;
        var P = new Va(k, j, v, I, F, g, f, y);
        P.baseClass && (P.baseClass.__derivedClasses === void 0 && (P.baseClass.__derivedClasses = []), P.baseClass.__derivedClasses.push(P));
        var O = new we(k, P, !0, !1, !1), X = new we(k + "*", P, !1, !1, !1), _e = new we(k + " const*", P, !1, !0, !1);
        return Ln[r] = { pointerType: X, constPointerType: _e }, Bn(M, j), [O, X, _e];
      });
    }
    function ni() {
      this.allocated = [void 0], this.freelist = [], this.get = function(r) {
        return this.allocated[r];
      }, this.has = function(r) {
        return this.allocated[r] !== void 0;
      }, this.allocate = function(r) {
        var a = this.freelist.pop() || this.allocated.length;
        return this.allocated[a] = r, a;
      }, this.free = function(r) {
        this.allocated[r] = void 0, this.freelist.push(r);
      };
    }
    var ge = new ni();
    function Hn(r) {
      r >= ge.reserved && --ge.get(r).refcount === 0 && ge.free(r);
    }
    function ri() {
      for (var r = 0, a = ge.reserved; a < ge.allocated.length; ++a)
        ge.allocated[a] !== void 0 && ++r;
      return r;
    }
    function ai() {
      ge.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), ge.reserved = ge.allocated.length, e.count_emval_handles = ri;
    }
    var pe = { toValue: (r) => (r || z("Cannot use deleted val. handle = " + r), ge.get(r).value), toHandle: (r) => {
      switch (r) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default:
          return ge.allocate({ refcount: 1, value: r });
      }
    } };
    function ii(r, a) {
      a = ee(a), fe(r, { name: a, fromWireType: function(i) {
        var s = pe.toValue(i);
        return Hn(i), s;
      }, toWireType: function(i, s) {
        return pe.toHandle(s);
      }, argPackAdvance: 8, readValueFromPointer: it, destructorFunction: null });
    }
    function si(r, a, i) {
      switch (a) {
        case 0:
          return function(s) {
            var o = i ? V : te;
            return this.fromWireType(o[s >>> 0]);
          };
        case 1:
          return function(s) {
            var o = i ? ue : tt;
            return this.fromWireType(o[s >>> 1]);
          };
        case 2:
          return function(s) {
            var o = i ? G : W;
            return this.fromWireType(o[s >>> 2]);
          };
        default:
          throw new TypeError("Unknown integer type: " + r);
      }
    }
    function ui(r, a, i, s) {
      var o = ot(i);
      a = ee(a);
      function g() {
      }
      g.values = {}, fe(r, { name: a, constructor: g, fromWireType: function(m) {
        return this.constructor.values[m];
      }, toWireType: function(m, f) {
        return f.value;
      }, argPackAdvance: 8, readValueFromPointer: si(a, o, s), destructorFunction: null }), Kt(a, g);
    }
    function Ot(r, a) {
      var i = He[r];
      return i === void 0 && z(a + " has unknown type " + zn(r)), i;
    }
    function oi(r, a, i) {
      var s = Ot(r, "enum");
      a = ee(a);
      var o = s.constructor, g = Object.create(s.constructor.prototype, { value: { value: i }, constructor: { value: Gt(`${s.name}_${a}`, function() {
      }) } });
      o.values[i] = g, o[a] = g;
    }
    function _i(r, a) {
      switch (a) {
        case 2:
          return function(i) {
            return this.fromWireType(St[i >>> 2]);
          };
        case 3:
          return function(i) {
            return this.fromWireType(kt[i >>> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + r);
      }
    }
    function li(r, a, i) {
      var s = ot(i);
      a = ee(a), fe(r, { name: a, fromWireType: function(o) {
        return o;
      }, toWireType: function(o, g) {
        return g;
      }, argPackAdvance: 8, readValueFromPointer: _i(a, s), destructorFunction: null });
    }
    function Un(r, a) {
      if (!(r instanceof Function))
        throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);
      var i = Gt(r.name || "unknownFunctionName", function() {
      });
      i.prototype = r.prototype;
      var s = new i(), o = r.apply(s, a);
      return o instanceof Object ? o : s;
    }
    function ci(r, a, i, s, o, g) {
      var m = a.length;
      m < 2 && z("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var f = a[1] !== null && i !== null, d = !1, y = 1; y < a.length; ++y)
        if (a[y] !== null && a[y].destructorFunction === void 0) {
          d = !0;
          break;
        }
      for (var k = a[0].name !== "void", D = "", I = "", y = 0; y < m - 2; ++y)
        D += (y !== 0 ? ", " : "") + "arg" + y, I += (y !== 0 ? ", " : "") + "arg" + y + "Wired";
      var M = `
        return function ${bt(r)}(${D}) {
        if (arguments.length !== ${m - 2}) {
          throwBindingError('function ${r} called with ${arguments.length} arguments, expected ${m - 2} args!');
        }`;
      d && (M += `var destructors = [];
`);
      var R = d ? "destructors" : "null", F = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], q = [z, s, o, Pn, a[0], a[1]];
      f && (M += "var thisWired = classParam.toWireType(" + R + `, this);
`);
      for (var y = 0; y < m - 2; ++y)
        M += "var arg" + y + "Wired = argType" + y + ".toWireType(" + R + ", arg" + y + "); // " + a[y + 2].name + `
`, F.push("argType" + y), q.push(a[y + 2]);
      if (f && (I = "thisWired" + (I.length > 0 ? ", " : "") + I), M += (k || g ? "var rv = " : "") + "invoker(fn" + (I.length > 0 ? ", " : "") + I + `);
`, d)
        M += `runDestructors(destructors);
`;
      else
        for (var y = f ? 1 : 2; y < a.length; ++y) {
          var j = y === 1 ? "thisWired" : "arg" + (y - 2) + "Wired";
          a[y].destructorFunction !== null && (M += j + "_dtor(" + j + "); // " + a[y].name + `
`, F.push(j + "_dtor"), q.push(a[y].destructorFunction));
        }
      return k && (M += `var ret = retType.fromWireType(rv);
return ret;
`), M += `}
`, F.push(M), Un(Function, F).apply(null, q);
    }
    function gi(r, a) {
      for (var i = [], s = 0; s < r; s++)
        i.push(W[a + s * 4 >>> 2]);
      return i;
    }
    function mi(r, a, i, s, o, g, m) {
      var f = gi(a, i);
      r = ee(r), o = Se(s, o), Kt(r, function() {
        Nn(`Cannot call ${r} due to unbound types`, f);
      }, a - 1), Vt([], f, function(d) {
        var y = [d[0], null].concat(d.slice(1));
        return Bn(r, ci(r, y, null, o, g, m), a - 1), [];
      });
    }
    function fi(r, a, i, s, o) {
      a = ee(a);
      var g = ot(i), m = (D) => D;
      if (s === 0) {
        var f = 32 - 8 * i;
        m = (D) => D << f >>> f;
      }
      var d = a.includes("unsigned"), y = (D, I) => {
      }, k;
      d ? k = function(D, I) {
        return y(I, this.name), I >>> 0;
      } : k = function(D, I) {
        return y(I, this.name), I;
      }, fe(r, { name: a, fromWireType: m, toWireType: k, argPackAdvance: 8, readValueFromPointer: Rn(a, g, s !== 0), destructorFunction: null });
    }
    function pi(r, a, i) {
      var s = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array], o = s[a];
      function g(m) {
        m = m >> 2;
        var f = W, d = f[m >>> 0], y = f[m + 1 >>> 0];
        return new o(f.buffer, y, d);
      }
      i = ee(i), fe(r, { name: i, fromWireType: g, argPackAdvance: 8, readValueFromPointer: g }, { ignoreDuplicateRegistrations: !0 });
    }
    function hi(r, a) {
      a = ee(a);
      var i = a === "std::string";
      fe(r, { name: a, fromWireType: function(s) {
        var o = W[s >>> 2], g = s + 4, m;
        if (i)
          for (var f = g, d = 0; d <= o; ++d) {
            var y = g + d;
            if (d == o || te[y >>> 0] == 0) {
              var k = y - f, D = at(f, k);
              m === void 0 ? m = D : (m += "\0", m += D), f = y + 1;
            }
          }
        else {
          for (var I = new Array(o), d = 0; d < o; ++d)
            I[d] = String.fromCharCode(te[g + d >>> 0]);
          m = I.join("");
        }
        return ke(s), m;
      }, toWireType: function(s, o) {
        o instanceof ArrayBuffer && (o = new Uint8Array(o));
        var g, m = typeof o == "string";
        m || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Int8Array || z("Cannot pass non-string to std::string"), i && m ? g = xe(o) : g = o.length;
        var f = Et(4 + g + 1), d = f + 4;
        if (d >>>= 0, W[f >>> 2] = g, i && m)
          qe(o, d, g + 1);
        else if (m)
          for (var y = 0; y < g; ++y) {
            var k = o.charCodeAt(y);
            k > 255 && (ke(d), z("String has UTF-16 code units that do not fit in 8 bits")), te[d + y >>> 0] = k;
          }
        else
          for (var y = 0; y < g; ++y)
            te[d + y >>> 0] = o[y];
        return s !== null && s.push(ke, f), f;
      }, argPackAdvance: 8, readValueFromPointer: it, destructorFunction: function(s) {
        ke(s);
      } });
    }
    var Fn = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, di = (r, a) => {
      for (var i = r, s = i >> 1, o = s + a / 2; !(s >= o) && tt[s >>> 0]; ) ++s;
      if (i = s << 1, i - r > 32 && Fn) return Fn.decode(te.subarray(r >>> 0, i >>> 0));
      for (var g = "", m = 0; !(m >= a / 2); ++m) {
        var f = ue[r + m * 2 >>> 1];
        if (f == 0) break;
        g += String.fromCharCode(f);
      }
      return g;
    }, yi = (r, a, i) => {
      if (i === void 0 && (i = 2147483647), i < 2) return 0;
      i -= 2;
      for (var s = a, o = i < r.length * 2 ? i / 2 : r.length, g = 0; g < o; ++g) {
        var m = r.charCodeAt(g);
        ue[a >>> 1] = m, a += 2;
      }
      return ue[a >>> 1] = 0, a - s;
    }, wi = (r) => r.length * 2, Si = (r, a) => {
      for (var i = 0, s = ""; !(i >= a / 4); ) {
        var o = G[r + i * 4 >>> 2];
        if (o == 0) break;
        if (++i, o >= 65536) {
          var g = o - 65536;
          s += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023);
        } else
          s += String.fromCharCode(o);
      }
      return s;
    }, ki = (r, a, i) => {
      if (a >>>= 0, i === void 0 && (i = 2147483647), i < 4) return 0;
      for (var s = a, o = s + i - 4, g = 0; g < r.length; ++g) {
        var m = r.charCodeAt(g);
        if (m >= 55296 && m <= 57343) {
          var f = r.charCodeAt(++g);
          m = 65536 + ((m & 1023) << 10) | f & 1023;
        }
        if (G[a >>> 2] = m, a += 4, a + 4 > o) break;
      }
      return G[a >>> 2] = 0, a - s;
    }, vi = (r) => {
      for (var a = 0, i = 0; i < r.length; ++i) {
        var s = r.charCodeAt(i);
        s >= 55296 && s <= 57343 && ++i, a += 4;
      }
      return a;
    }, Ii = function(r, a, i) {
      i = ee(i);
      var s, o, g, m, f;
      a === 2 ? (s = di, o = yi, m = wi, g = () => tt, f = 1) : a === 4 && (s = Si, o = ki, m = vi, g = () => W, f = 2), fe(r, { name: i, fromWireType: function(d) {
        for (var y = W[d >>> 2], k = g(), D, I = d + 4, M = 0; M <= y; ++M) {
          var R = d + 4 + M * a;
          if (M == y || k[R >>> f] == 0) {
            var F = R - I, q = s(I, F);
            D === void 0 ? D = q : (D += "\0", D += q), I = R + a;
          }
        }
        return ke(d), D;
      }, toWireType: function(d, y) {
        typeof y != "string" && z(`Cannot pass non-string to C++ string type ${i}`);
        var k = m(y), D = Et(4 + k + a);
        return D >>>= 0, W[D >>> 2] = k >> f, o(y, D + 4, k + a), d !== null && d.push(ke, D), D;
      }, argPackAdvance: 8, readValueFromPointer: it, destructorFunction: function(d) {
        ke(d);
      } });
    };
    function Mi(r, a, i, s, o, g) {
      Mt[r] = { name: ee(a), rawConstructor: Se(i, s), rawDestructor: Se(o, g), fields: [] };
    }
    function Di(r, a, i, s, o, g, m, f, d, y) {
      Mt[r].fields.push({ fieldName: ee(a), getterReturnType: i, getter: Se(s, o), getterContext: g, setterArgumentType: m, setter: Se(f, d), setterContext: y });
    }
    function bi(r, a) {
      a = ee(a), fe(r, { isVoid: !0, name: a, argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(i, s) {
      } });
    }
    var Gi = !0, Pi = () => Gi, Ci = () => {
      throw 1 / 0;
    }, Ai = {};
    function $n(r) {
      var a = Ai[r];
      return a === void 0 ? ee(r) : a;
    }
    var en = [];
    function Ri(r, a, i, s) {
      r = en[r], a = pe.toValue(a), i = $n(i), r(a, i, null, s);
    }
    function Ei(r) {
      var a = en.length;
      return en.push(r), a;
    }
    function Ti(r, a) {
      for (var i = new Array(r), s = 0; s < r; ++s)
        i[s] = Ot(W[a + s * 4 >>> 2], "parameter " + s);
      return i;
    }
    var Yn = [];
    function Wi(r, a) {
      var i = Ti(r, a), s = i[0], o = s.name + "_$" + i.slice(1).map(function(R) {
        return R.name;
      }).join("_") + "$", g = Yn[o];
      if (g !== void 0)
        return g;
      for (var m = ["retType"], f = [s], d = "", y = 0; y < r - 1; ++y)
        d += (y !== 0 ? ", " : "") + "arg" + y, m.push("argType" + y), f.push(i[1 + y]);
      for (var k = bt("methodCaller_" + o), D = "return function " + k + `(handle, name, destructors, args) {
`, I = 0, y = 0; y < r - 1; ++y)
        D += "    var arg" + y + " = argType" + y + ".readValueFromPointer(args" + (I ? "+" + I : "") + `);
`, I += i[y + 1].argPackAdvance;
      D += "    var rv = handle[name](" + d + `);
`;
      for (var y = 0; y < r - 1; ++y)
        i[y + 1].deleteObject && (D += "    argType" + y + ".deleteObject(arg" + y + `);
`);
      s.isVoid || (D += `    return retType.toWireType(destructors, rv);
`), D += `};
`, m.push(D);
      var M = Un(Function, m).apply(null, f);
      return g = Ei(M), Yn[o] = g, g;
    }
    function Li(r) {
      r > 4 && (ge.get(r).refcount += 1);
    }
    function Bi() {
      return pe.toHandle([]);
    }
    function xi(r) {
      return pe.toHandle($n(r));
    }
    function zi() {
      return pe.toHandle({});
    }
    function Ni(r, a, i) {
      r = pe.toValue(r), a = pe.toValue(a), i = pe.toValue(i), r[a] = i;
    }
    function Hi(r, a) {
      r = Ot(r, "_emval_take_value");
      var i = r.readValueFromPointer(a);
      return pe.toHandle(i);
    }
    function jn(r) {
      return W[r >>> 2] + G[r + 4 >>> 2] * 4294967296;
    }
    var Ui = (r, a) => {
      var i = new Date(jn(r) * 1e3);
      G[a >>> 2] = i.getUTCSeconds(), G[a + 4 >>> 2] = i.getUTCMinutes(), G[a + 8 >>> 2] = i.getUTCHours(), G[a + 12 >>> 2] = i.getUTCDate(), G[a + 16 >>> 2] = i.getUTCMonth(), G[a + 20 >>> 2] = i.getUTCFullYear() - 1900, G[a + 24 >>> 2] = i.getUTCDay();
      var s = Date.UTC(i.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o = (i.getTime() - s) / (1e3 * 60 * 60 * 24) | 0;
      G[a + 28 >>> 2] = o;
    }, mt = (r) => r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0), Fi = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], $i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Xn = (r) => {
      var a = mt(r.getFullYear()), i = a ? Fi : $i, s = i[r.getMonth()] + r.getDate() - 1;
      return s;
    }, Yi = (r, a) => {
      var i = new Date(jn(r) * 1e3);
      G[a >>> 2] = i.getSeconds(), G[a + 4 >>> 2] = i.getMinutes(), G[a + 8 >>> 2] = i.getHours(), G[a + 12 >>> 2] = i.getDate(), G[a + 16 >>> 2] = i.getMonth(), G[a + 20 >>> 2] = i.getFullYear() - 1900, G[a + 24 >>> 2] = i.getDay();
      var s = Xn(i) | 0;
      G[a + 28 >>> 2] = s, G[a + 36 >>> 2] = -(i.getTimezoneOffset() * 60);
      var o = new Date(i.getFullYear(), 0, 1), g = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(), m = o.getTimezoneOffset(), f = (g != m && i.getTimezoneOffset() == Math.min(m, g)) | 0;
      G[a + 32 >>> 2] = f;
    }, ji = (r) => {
      var a = new Date(G[r + 20 >>> 2] + 1900, G[r + 16 >>> 2], G[r + 12 >>> 2], G[r + 8 >>> 2], G[r + 4 >>> 2], G[r >>> 2], 0), i = G[r + 32 >>> 2], s = a.getTimezoneOffset(), o = new Date(a.getFullYear(), 0, 1), g = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(), m = o.getTimezoneOffset(), f = Math.min(m, g);
      if (i < 0)
        G[r + 32 >>> 2] = +(g != m && f == s);
      else if (i > 0 != (f == s)) {
        var d = Math.max(m, g), y = i > 0 ? f : d;
        a.setTime(a.getTime() + (y - s) * 6e4);
      }
      G[r + 24 >>> 2] = a.getDay();
      var k = Xn(a) | 0;
      return G[r + 28 >>> 2] = k, G[r >>> 2] = a.getSeconds(), G[r + 4 >>> 2] = a.getMinutes(), G[r + 8 >>> 2] = a.getHours(), G[r + 12 >>> 2] = a.getDate(), G[r + 16 >>> 2] = a.getMonth(), G[r + 20 >>> 2] = a.getYear(), a.getTime() / 1e3 | 0;
    };
    function Xi(r, a, i, s, o, g, m) {
      try {
        if (o = Ne(o), isNaN(o)) return -61;
        var f = C.getStreamFromFD(s), d = l.mmap(f, r, o, a, i), y = d.ptr;
        return G[g >>> 2] = d.allocated, y >>>= 0, W[m >>> 2] = y, 0;
      } catch (k) {
        if (typeof l > "u" || k.name !== "ErrnoError") throw k;
        return -k.errno;
      }
    }
    function Vi(r, a, i, s, o, g) {
      try {
        if (g = Ne(g), isNaN(g)) return -61;
        var m = C.getStreamFromFD(o);
        i & 2 && C.doMsync(r, m, a, s, g), l.munmap(m);
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    var Vn = (r) => {
      var a = xe(r) + 1, i = Et(a);
      return i && qe(r, i, a), i;
    }, qi = (r, a, i) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), o = new Date(s, 0, 1), g = new Date(s, 6, 1), m = o.getTimezoneOffset(), f = g.getTimezoneOffset(), d = Math.max(m, f);
      W[r >>> 2] = d * 60, G[a >>> 2] = +(m != f);
      function y(R) {
        var F = R.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return F ? F[1] : "GMT";
      }
      var k = y(o), D = y(g), I = Vn(k), M = Vn(D);
      f < m ? (W[i >>> 2] = I, W[i + 4 >>> 2] = M) : (W[i >>> 2] = M, W[i + 4 >>> 2] = I);
    }, Qi = () => {
      de("");
    };
    function Ji() {
      return Date.now();
    }
    var qn = () => 4294901760, Ki = () => qn(), Qn;
    Qn = () => performance.now();
    var Zi = (r, a, i) => te.copyWithin(r >>> 0, a >>> 0, a + i >>> 0), Oi = (r) => {
      var a = wt.buffer, i = r - a.byteLength + 65535 >>> 16;
      try {
        return wt.grow(i), hn(), 1;
      } catch {
      }
    }, es = (r) => {
      var a = te.length;
      r = r >>> 0;
      var i = qn();
      if (r > i)
        return !1;
      for (var s = (d, y) => d + (y - d % y) % y, o = 1; o <= 4; o *= 2) {
        var g = a * (1 + 0.2 / o);
        g = Math.min(g, r + 100663296);
        var m = Math.min(i, s(Math.max(r, g), 65536)), f = Oi(m);
        if (f)
          return !0;
      }
      return !1;
    }, tn = {}, ts = () => h || "./this.program", ft = () => {
      if (!ft.strings) {
        var r = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: r, _: ts() };
        for (var i in tn)
          tn[i] === void 0 ? delete a[i] : a[i] = tn[i];
        var s = [];
        for (var i in a)
          s.push(`${i}=${a[i]}`);
        ft.strings = s;
      }
      return ft.strings;
    }, ns = (r, a) => {
      for (var i = 0; i < r.length; ++i)
        V[a++ >>> 0] = r.charCodeAt(i);
      V[a >>> 0] = 0;
    }, rs = (r, a) => {
      var i = 0;
      return ft().forEach(function(s, o) {
        var g = a + i;
        W[r + o * 4 >>> 2] = g, ns(s, g), i += s.length + 1;
      }), 0;
    }, as = (r, a) => {
      var i = ft();
      W[r >>> 2] = i.length;
      var s = 0;
      return i.forEach(function(o) {
        s += o.length + 1;
      }), W[a >>> 2] = s, 0;
    }, Jn = (r) => {
      Er() || (e.onExit && e.onExit(r), Ht = !0), S(r, new $r(r));
    }, is = (r, a) => {
      Jn(r);
    }, ss = is;
    function us(r) {
      try {
        var a = C.getStreamFromFD(r);
        return l.close(a), 0;
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    function os(r, a) {
      try {
        var i = 0, s = 0, o = 0, g = C.getStreamFromFD(r), m = g.tty ? 2 : l.isDir(g.mode) ? 3 : l.isLink(g.mode) ? 7 : 4;
        return V[a >>> 0] = m, ue[a + 2 >>> 1] = o, oe[a + 8 >> 3] = BigInt(i), oe[a + 16 >> 3] = BigInt(s), 0;
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    var Kn = (r, a, i, s) => {
      for (var o = 0, g = 0; g < i; g++) {
        var m = W[a >>> 2], f = W[a + 4 >>> 2];
        a += 8;
        var d = l.read(r, V, m, f, s);
        if (d < 0) return -1;
        if (o += d, d < f) break;
        typeof s < "u" && (s += d);
      }
      return o;
    };
    function _s(r, a, i, s, o) {
      try {
        if (s = Ne(s), isNaN(s)) return 61;
        var g = C.getStreamFromFD(r), m = Kn(g, a, i, s);
        return W[o >>> 2] = m, 0;
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    var Zn = (r, a, i, s) => {
      for (var o = 0, g = 0; g < i; g++) {
        var m = W[a >>> 2], f = W[a + 4 >>> 2];
        a += 8;
        var d = l.write(r, V, m, f, s);
        if (d < 0) return -1;
        o += d, typeof s < "u" && (s += d);
      }
      return o;
    };
    function ls(r, a, i, s, o) {
      try {
        if (s = Ne(s), isNaN(s)) return 61;
        var g = C.getStreamFromFD(r), m = Zn(g, a, i, s);
        return W[o >>> 2] = m, 0;
      } catch (f) {
        if (typeof l > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    function cs(r, a, i, s) {
      try {
        var o = C.getStreamFromFD(r), g = Kn(o, a, i);
        return W[s >>> 2] = g, 0;
      } catch (m) {
        if (typeof l > "u" || m.name !== "ErrnoError") throw m;
        return m.errno;
      }
    }
    function gs(r, a, i, s) {
      try {
        if (a = Ne(a), isNaN(a)) return 61;
        var o = C.getStreamFromFD(r);
        return l.llseek(o, a, i), oe[s >> 3] = BigInt(o.position), o.getdents && a === 0 && i === 0 && (o.getdents = null), 0;
      } catch (g) {
        if (typeof l > "u" || g.name !== "ErrnoError") throw g;
        return g.errno;
      }
    }
    function ms(r) {
      try {
        var a = C.getStreamFromFD(r);
        return a.stream_ops && a.stream_ops.fsync ? a.stream_ops.fsync(a) : 0;
      } catch (i) {
        if (typeof l > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    function fs(r, a, i, s) {
      try {
        var o = C.getStreamFromFD(r), g = Zn(o, a, i);
        return W[s >>> 2] = g, 0;
      } catch (m) {
        if (typeof l > "u" || m.name !== "ErrnoError") throw m;
        return m.errno;
      }
    }
    var ps = (r, a) => ($t(te.subarray(r >>> 0, r + a >>> 0)), 0), hs = (r, a) => {
      for (var i = 0, s = 0; s <= a; i += r[s++])
        ;
      return i;
    }, On = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], er = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ds = (r, a) => {
      for (var i = new Date(r.getTime()); a > 0; ) {
        var s = mt(i.getFullYear()), o = i.getMonth(), g = (s ? On : er)[o];
        if (a > g - i.getDate())
          a -= g - i.getDate() + 1, i.setDate(1), o < 11 ? i.setMonth(o + 1) : (i.setMonth(0), i.setFullYear(i.getFullYear() + 1));
        else
          return i.setDate(i.getDate() + a), i;
      }
      return i;
    }, ys = (r, a) => {
      V.set(r, a >>> 0);
    }, tr = (r, a, i, s) => {
      var o = G[s + 40 >>> 2], g = { tm_sec: G[s >>> 2], tm_min: G[s + 4 >>> 2], tm_hour: G[s + 8 >>> 2], tm_mday: G[s + 12 >>> 2], tm_mon: G[s + 16 >>> 2], tm_year: G[s + 20 >>> 2], tm_wday: G[s + 24 >>> 2], tm_yday: G[s + 28 >>> 2], tm_isdst: G[s + 32 >>> 2], tm_gmtoff: G[s + 36 >>> 2], tm_zone: o ? at(o) : "" }, m = at(i), f = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var d in f)
        m = m.replace(new RegExp(d, "g"), f[d]);
      var y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], k = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function D(v, P, O) {
        for (var X = typeof v == "number" ? v.toString() : v || ""; X.length < P; )
          X = O[0] + X;
        return X;
      }
      function I(v, P) {
        return D(v, P, "0");
      }
      function M(v, P) {
        function O(_e) {
          return _e < 0 ? -1 : _e > 0 ? 1 : 0;
        }
        var X;
        return (X = O(v.getFullYear() - P.getFullYear())) === 0 && (X = O(v.getMonth() - P.getMonth())) === 0 && (X = O(v.getDate() - P.getDate())), X;
      }
      function R(v) {
        switch (v.getDay()) {
          case 0:
            return new Date(v.getFullYear() - 1, 11, 29);
          case 1:
            return v;
          case 2:
            return new Date(v.getFullYear(), 0, 3);
          case 3:
            return new Date(v.getFullYear(), 0, 2);
          case 4:
            return new Date(v.getFullYear(), 0, 1);
          case 5:
            return new Date(v.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(v.getFullYear() - 1, 11, 30);
        }
      }
      function F(v) {
        var P = ds(new Date(v.tm_year + 1900, 0, 1), v.tm_yday), O = new Date(P.getFullYear(), 0, 4), X = new Date(P.getFullYear() + 1, 0, 4), _e = R(O), Z = R(X);
        return M(_e, P) <= 0 ? M(Z, P) <= 0 ? P.getFullYear() + 1 : P.getFullYear() : P.getFullYear() - 1;
      }
      var q = { "%a": (v) => y[v.tm_wday].substring(0, 3), "%A": (v) => y[v.tm_wday], "%b": (v) => k[v.tm_mon].substring(0, 3), "%B": (v) => k[v.tm_mon], "%C": (v) => {
        var P = v.tm_year + 1900;
        return I(P / 100 | 0, 2);
      }, "%d": (v) => I(v.tm_mday, 2), "%e": (v) => D(v.tm_mday, 2, " "), "%g": (v) => F(v).toString().substring(2), "%G": (v) => F(v), "%H": (v) => I(v.tm_hour, 2), "%I": (v) => {
        var P = v.tm_hour;
        return P == 0 ? P = 12 : P > 12 && (P -= 12), I(P, 2);
      }, "%j": (v) => I(v.tm_mday + hs(mt(v.tm_year + 1900) ? On : er, v.tm_mon - 1), 3), "%m": (v) => I(v.tm_mon + 1, 2), "%M": (v) => I(v.tm_min, 2), "%n": () => `
`, "%p": (v) => v.tm_hour >= 0 && v.tm_hour < 12 ? "AM" : "PM", "%S": (v) => I(v.tm_sec, 2), "%t": () => "	", "%u": (v) => v.tm_wday || 7, "%U": (v) => {
        var P = v.tm_yday + 7 - v.tm_wday;
        return I(Math.floor(P / 7), 2);
      }, "%V": (v) => {
        var P = Math.floor((v.tm_yday + 7 - (v.tm_wday + 6) % 7) / 7);
        if ((v.tm_wday + 371 - v.tm_yday - 2) % 7 <= 2 && P++, P) {
          if (P == 53) {
            var X = (v.tm_wday + 371 - v.tm_yday) % 7;
            X != 4 && (X != 3 || !mt(v.tm_year)) && (P = 1);
          }
        } else {
          P = 52;
          var O = (v.tm_wday + 7 - v.tm_yday - 1) % 7;
          (O == 4 || O == 5 && mt(v.tm_year % 400 - 1)) && P++;
        }
        return I(P, 2);
      }, "%w": (v) => v.tm_wday, "%W": (v) => {
        var P = v.tm_yday + 7 - (v.tm_wday + 6) % 7;
        return I(Math.floor(P / 7), 2);
      }, "%y": (v) => (v.tm_year + 1900).toString().substring(2), "%Y": (v) => v.tm_year + 1900, "%z": (v) => {
        var P = v.tm_gmtoff, O = P >= 0;
        return P = Math.abs(P) / 60, P = P / 60 * 100 + P % 60, (O ? "+" : "-") + ("0000" + P).slice(-4);
      }, "%Z": (v) => v.tm_zone, "%%": () => "%" };
      m = m.replace(/%%/g, "\0\0");
      for (var d in q)
        m.includes(d) && (m = m.replace(new RegExp(d, "g"), q[d](g)));
      m = m.replace(/\0\0/g, "%");
      var j = It(m, !1);
      return j.length > a ? 0 : (ys(j, r), j.length - 1);
    }, ws = (r, a, i, s, o) => tr(r, a, i, s), Ss = (r) => r ? (Gn(52), -1) : 0;
    function nr(r, a) {
      r < 128 ? a.push(r) : a.push(r % 128 | 128, r >> 7);
    }
    function ks(r) {
      for (var a = { i: "i32", j: "i64", f: "f32", d: "f64", p: "i32" }, i = { parameters: [], results: r[0] == "v" ? [] : [a[r[0]]] }, s = 1; s < r.length; ++s)
        i.parameters.push(a[r[s]]);
      return i;
    }
    function vs(r, a) {
      var i = r.slice(0, 1), s = r.slice(1), o = { i: 127, p: 127, j: 126, f: 125, d: 124 };
      a.push(96), nr(s.length, a);
      for (var g = 0; g < s.length; ++g)
        a.push(o[s[g]]);
      i == "v" ? a.push(0) : a.push(1, o[i]);
    }
    function Is(r, a) {
      if (typeof WebAssembly.Function == "function")
        return new WebAssembly.Function(ks(a), r);
      var i = [1];
      vs(a, i);
      var s = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      nr(i.length, s), s.push.apply(s, i), s.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var o = new WebAssembly.Module(new Uint8Array(s)), g = new WebAssembly.Instance(o, { e: { f: r } }), m = g.exports.f;
      return m;
    }
    function Ms(r, a) {
      if (Je)
        for (var i = r; i < r + a; i++) {
          var s = x(i);
          s && Je.set(s, i);
        }
    }
    var Je = void 0;
    function Ds(r) {
      return Je || (Je = /* @__PURE__ */ new WeakMap(), Ms(0, Le.length)), Je.get(r) || 0;
    }
    var rr = [];
    function bs() {
      if (rr.length)
        return rr.pop();
      try {
        Le.grow(1);
      } catch (r) {
        throw r instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : r;
      }
      return Le.length - 1;
    }
    var ar = (r, a) => {
      Le.set(r, a), rt[r] = Le.get(r);
    };
    function Gs(r, a) {
      var i = Ds(r);
      if (i)
        return i;
      var s = bs();
      try {
        ar(s, r);
      } catch (g) {
        if (!(g instanceof TypeError))
          throw g;
        var o = Is(r, a);
        ar(s, o);
      }
      return Je.set(r, s), s;
    }
    var ir = function(r, a, i, s) {
      r || (r = this), this.parent = r, this.mount = r.mount, this.mounted = null, this.id = l.nextInode++, this.name = a, this.mode = i, this.node_ops = {}, this.stream_ops = {}, this.rdev = s;
    }, At = 365, Rt = 146;
    Object.defineProperties(ir.prototype, { read: { get: function() {
      return (this.mode & At) === At;
    }, set: function(r) {
      r ? this.mode |= At : this.mode &= ~At;
    } }, write: { get: function() {
      return (this.mode & Rt) === Rt;
    }, set: function(r) {
      r ? this.mode |= Rt : this.mode &= ~Rt;
    } }, isFolder: { get: function() {
      return l.isDir(this.mode);
    } }, isDevice: { get: function() {
      return l.isChrdev(this.mode);
    } } }), l.FSNode = ir, l.createPreloadedFile = ra, l.staticInit(), Cn = e.InternalError = Xt(Error, "InternalError"), Pa(), ut = e.BindingError = Xt(Error, "BindingError"), ja(), xa(), ei(), xn = e.UnboundTypeError = Xt(Error, "UnboundTypeError"), ai();
    var Ps = { ga: Xr, H: Qr, a: Jr, G: Vr, ya: ia, za: sa, ja: _a, va: la, K: ca, S: ga, qa: ma, fa, Ba: pa, sa: ha, ta: da, I: ya, ea: wa, _a: Sa, $a: ka, ua: va, Za: Ia, Q: Ma, Na: Ga, W: Ca, Fa: Aa, N: ti, Ea: ii, x: ui, f: oi, V: li, q: mi, w: fi, o: pi, U: hi, L: Ii, Oa: Mi, M: Di, Ga: bi, wa: Pi, Va: Ci, La: Ri, m: Hn, Ma: Wi, E: Li, Y: Bi, u: xi, F: zi, s: Ni, p: Hi, ma: Ui, na: Yi, oa: ji, ka: Xi, la: Vi, Xa: qi, c: Qi, z: Ji, Ya: Ki, D: Qn, xa: Zi, Wa: es, Ca: rs, Da: as, y: ss, B: us, R: os, ia: _s, ha: ls, T: cs, pa: gs, ra: ms, J: fs, da: ps, Qa: Xs, P: Hs, d: Es, e: Rs, g: As, j: Bs, ca: js, b: Us, ba: Qs, n: Ns, aa: Js, Ka: nu, Ja: ru, v: Fs, Sa: $s, t: zs, Ta: xs, O: Vs, l: Ts, h: Ws, $: Ks, _: Zs, k: Cs, i: Ls, r: qs, Pa: eu, X: tu, Ia: au, Z: Os, Ha: iu, Ra: Ys, Aa: Jn, C: tr, Ua: ws, A: Ss };
    Fr(), e._MagickColor_Create = function() {
      return (e._MagickColor_Create = e.asm.cb).apply(null, arguments);
    }, e._MagickColor_Dispose = function() {
      return (e._MagickColor_Dispose = e.asm.db).apply(null, arguments);
    }, e._MagickColor_Count_Get = function() {
      return (e._MagickColor_Count_Get = e.asm.eb).apply(null, arguments);
    }, e._MagickColor_Red_Get = function() {
      return (e._MagickColor_Red_Get = e.asm.fb).apply(null, arguments);
    }, e._MagickColor_Red_Set = function() {
      return (e._MagickColor_Red_Set = e.asm.gb).apply(null, arguments);
    }, e._MagickColor_Green_Get = function() {
      return (e._MagickColor_Green_Get = e.asm.hb).apply(null, arguments);
    }, e._MagickColor_Green_Set = function() {
      return (e._MagickColor_Green_Set = e.asm.ib).apply(null, arguments);
    }, e._MagickColor_Blue_Get = function() {
      return (e._MagickColor_Blue_Get = e.asm.jb).apply(null, arguments);
    }, e._MagickColor_Blue_Set = function() {
      return (e._MagickColor_Blue_Set = e.asm.kb).apply(null, arguments);
    }, e._MagickColor_Alpha_Get = function() {
      return (e._MagickColor_Alpha_Get = e.asm.lb).apply(null, arguments);
    }, e._MagickColor_Alpha_Set = function() {
      return (e._MagickColor_Alpha_Set = e.asm.mb).apply(null, arguments);
    }, e._MagickColor_Black_Get = function() {
      return (e._MagickColor_Black_Get = e.asm.nb).apply(null, arguments);
    }, e._MagickColor_Black_Set = function() {
      return (e._MagickColor_Black_Set = e.asm.ob).apply(null, arguments);
    }, e._MagickColor_IsCMYK_Get = function() {
      return (e._MagickColor_IsCMYK_Get = e.asm.pb).apply(null, arguments);
    }, e._MagickColor_IsCMYK_Set = function() {
      return (e._MagickColor_IsCMYK_Set = e.asm.qb).apply(null, arguments);
    }, e._MagickColor_Clone = function() {
      return (e._MagickColor_Clone = e.asm.rb).apply(null, arguments);
    }, e._MagickColor_FuzzyEquals = function() {
      return (e._MagickColor_FuzzyEquals = e.asm.sb).apply(null, arguments);
    }, e._MagickColor_Initialize = function() {
      return (e._MagickColor_Initialize = e.asm.tb).apply(null, arguments);
    }, e._MagickColorCollection_DisposeList = function() {
      return (e._MagickColorCollection_DisposeList = e.asm.vb).apply(null, arguments);
    }, e._MagickColorCollection_GetInstance = function() {
      return (e._MagickColorCollection_GetInstance = e.asm.wb).apply(null, arguments);
    }, e._DrawingWand_Create = function() {
      return (e._DrawingWand_Create = e.asm.xb).apply(null, arguments);
    }, e._DrawingWand_Dispose = function() {
      return (e._DrawingWand_Dispose = e.asm.yb).apply(null, arguments);
    }, e._DrawingWand_Affine = function() {
      return (e._DrawingWand_Affine = e.asm.zb).apply(null, arguments);
    }, e._DrawingWand_Alpha = function() {
      return (e._DrawingWand_Alpha = e.asm.Ab).apply(null, arguments);
    }, e._DrawingWand_Arc = function() {
      return (e._DrawingWand_Arc = e.asm.Bb).apply(null, arguments);
    }, e._DrawingWand_Bezier = function() {
      return (e._DrawingWand_Bezier = e.asm.Cb).apply(null, arguments);
    }, e._DrawingWand_BorderColor = function() {
      return (e._DrawingWand_BorderColor = e.asm.Db).apply(null, arguments);
    }, e._DrawingWand_Circle = function() {
      return (e._DrawingWand_Circle = e.asm.Eb).apply(null, arguments);
    }, e._DrawingWand_ClipPath = function() {
      return (e._DrawingWand_ClipPath = e.asm.Fb).apply(null, arguments);
    }, e._DrawingWand_ClipRule = function() {
      return (e._DrawingWand_ClipRule = e.asm.Gb).apply(null, arguments);
    }, e._DrawingWand_ClipUnits = function() {
      return (e._DrawingWand_ClipUnits = e.asm.Hb).apply(null, arguments);
    }, e._DrawingWand_Color = function() {
      return (e._DrawingWand_Color = e.asm.Ib).apply(null, arguments);
    }, e._DrawingWand_Composite = function() {
      return (e._DrawingWand_Composite = e.asm.Jb).apply(null, arguments);
    }, e._DrawingWand_Density = function() {
      return (e._DrawingWand_Density = e.asm.Kb).apply(null, arguments);
    }, e._DrawingWand_Ellipse = function() {
      return (e._DrawingWand_Ellipse = e.asm.Lb).apply(null, arguments);
    }, e._DrawingWand_FillColor = function() {
      return (e._DrawingWand_FillColor = e.asm.Mb).apply(null, arguments);
    }, e._DrawingWand_FillOpacity = function() {
      return (e._DrawingWand_FillOpacity = e.asm.Nb).apply(null, arguments);
    }, e._DrawingWand_FillPatternUrl = function() {
      return (e._DrawingWand_FillPatternUrl = e.asm.Ob).apply(null, arguments);
    }, e._DrawingWand_FillRule = function() {
      return (e._DrawingWand_FillRule = e.asm.Pb).apply(null, arguments);
    }, e._DrawingWand_Font = function() {
      return (e._DrawingWand_Font = e.asm.Qb).apply(null, arguments);
    }, e._DrawingWand_FontFamily = function() {
      return (e._DrawingWand_FontFamily = e.asm.Rb).apply(null, arguments);
    }, e._DrawingWand_FontPointSize = function() {
      return (e._DrawingWand_FontPointSize = e.asm.Sb).apply(null, arguments);
    }, e._DrawingWand_FontTypeMetrics = function() {
      return (e._DrawingWand_FontTypeMetrics = e.asm.Tb).apply(null, arguments);
    }, e._TypeMetric_Create = function() {
      return (e._TypeMetric_Create = e.asm.Ub).apply(null, arguments);
    }, e._DrawingWand_Gravity = function() {
      return (e._DrawingWand_Gravity = e.asm.Vb).apply(null, arguments);
    }, e._DrawingWand_Line = function() {
      return (e._DrawingWand_Line = e.asm.Wb).apply(null, arguments);
    }, e._DrawingWand_PathArcAbs = function() {
      return (e._DrawingWand_PathArcAbs = e.asm.Xb).apply(null, arguments);
    }, e._DrawingWand_PathArcRel = function() {
      return (e._DrawingWand_PathArcRel = e.asm.Yb).apply(null, arguments);
    }, e._DrawingWand_PathClose = function() {
      return (e._DrawingWand_PathClose = e.asm.Zb).apply(null, arguments);
    }, e._DrawingWand_PathCurveToAbs = function() {
      return (e._DrawingWand_PathCurveToAbs = e.asm._b).apply(null, arguments);
    }, e._DrawingWand_PathCurveToRel = function() {
      return (e._DrawingWand_PathCurveToRel = e.asm.$b).apply(null, arguments);
    }, e._DrawingWand_PathFinish = function() {
      return (e._DrawingWand_PathFinish = e.asm.ac).apply(null, arguments);
    }, e._DrawingWand_PathLineToAbs = function() {
      return (e._DrawingWand_PathLineToAbs = e.asm.bc).apply(null, arguments);
    }, e._DrawingWand_PathLineToHorizontalAbs = function() {
      return (e._DrawingWand_PathLineToHorizontalAbs = e.asm.cc).apply(null, arguments);
    }, e._DrawingWand_PathLineToHorizontalRel = function() {
      return (e._DrawingWand_PathLineToHorizontalRel = e.asm.dc).apply(null, arguments);
    }, e._DrawingWand_PathLineToRel = function() {
      return (e._DrawingWand_PathLineToRel = e.asm.ec).apply(null, arguments);
    }, e._DrawingWand_PathLineToVerticalAbs = function() {
      return (e._DrawingWand_PathLineToVerticalAbs = e.asm.fc).apply(null, arguments);
    }, e._DrawingWand_PathLineToVerticalRel = function() {
      return (e._DrawingWand_PathLineToVerticalRel = e.asm.gc).apply(null, arguments);
    }, e._DrawingWand_PathMoveToAbs = function() {
      return (e._DrawingWand_PathMoveToAbs = e.asm.hc).apply(null, arguments);
    }, e._DrawingWand_PathMoveToRel = function() {
      return (e._DrawingWand_PathMoveToRel = e.asm.ic).apply(null, arguments);
    }, e._DrawingWand_PathQuadraticCurveToAbs = function() {
      return (e._DrawingWand_PathQuadraticCurveToAbs = e.asm.jc).apply(null, arguments);
    }, e._DrawingWand_PathQuadraticCurveToRel = function() {
      return (e._DrawingWand_PathQuadraticCurveToRel = e.asm.kc).apply(null, arguments);
    }, e._DrawingWand_PathSmoothCurveToAbs = function() {
      return (e._DrawingWand_PathSmoothCurveToAbs = e.asm.lc).apply(null, arguments);
    }, e._DrawingWand_PathSmoothCurveToRel = function() {
      return (e._DrawingWand_PathSmoothCurveToRel = e.asm.mc).apply(null, arguments);
    }, e._DrawingWand_PathSmoothQuadraticCurveToAbs = function() {
      return (e._DrawingWand_PathSmoothQuadraticCurveToAbs = e.asm.nc).apply(null, arguments);
    }, e._DrawingWand_PathSmoothQuadraticCurveToRel = function() {
      return (e._DrawingWand_PathSmoothQuadraticCurveToRel = e.asm.oc).apply(null, arguments);
    }, e._DrawingWand_PathStart = function() {
      return (e._DrawingWand_PathStart = e.asm.pc).apply(null, arguments);
    }, e._DrawingWand_Point = function() {
      return (e._DrawingWand_Point = e.asm.qc).apply(null, arguments);
    }, e._DrawingWand_Polygon = function() {
      return (e._DrawingWand_Polygon = e.asm.rc).apply(null, arguments);
    }, e._DrawingWand_Polyline = function() {
      return (e._DrawingWand_Polyline = e.asm.sc).apply(null, arguments);
    }, e._DrawingWand_PopClipPath = function() {
      return (e._DrawingWand_PopClipPath = e.asm.tc).apply(null, arguments);
    }, e._DrawingWand_PopGraphicContext = function() {
      return (e._DrawingWand_PopGraphicContext = e.asm.uc).apply(null, arguments);
    }, e._DrawingWand_PopPattern = function() {
      return (e._DrawingWand_PopPattern = e.asm.vc).apply(null, arguments);
    }, e._DrawingWand_PushClipPath = function() {
      return (e._DrawingWand_PushClipPath = e.asm.wc).apply(null, arguments);
    }, e._DrawingWand_PushGraphicContext = function() {
      return (e._DrawingWand_PushGraphicContext = e.asm.xc).apply(null, arguments);
    }, e._DrawingWand_PushPattern = function() {
      return (e._DrawingWand_PushPattern = e.asm.yc).apply(null, arguments);
    }, e._DrawingWand_Rectangle = function() {
      return (e._DrawingWand_Rectangle = e.asm.zc).apply(null, arguments);
    }, e._DrawingWand_Render = function() {
      return (e._DrawingWand_Render = e.asm.Ac).apply(null, arguments);
    }, e._DrawingWand_Rotation = function() {
      return (e._DrawingWand_Rotation = e.asm.Bc).apply(null, arguments);
    }, e._DrawingWand_RoundRectangle = function() {
      return (e._DrawingWand_RoundRectangle = e.asm.Cc).apply(null, arguments);
    }, e._DrawingWand_Scaling = function() {
      return (e._DrawingWand_Scaling = e.asm.Dc).apply(null, arguments);
    }, e._DrawingWand_SkewX = function() {
      return (e._DrawingWand_SkewX = e.asm.Ec).apply(null, arguments);
    }, e._DrawingWand_SkewY = function() {
      return (e._DrawingWand_SkewY = e.asm.Fc).apply(null, arguments);
    }, e._DrawingWand_StrokeAntialias = function() {
      return (e._DrawingWand_StrokeAntialias = e.asm.Gc).apply(null, arguments);
    }, e._DrawingWand_StrokeColor = function() {
      return (e._DrawingWand_StrokeColor = e.asm.Hc).apply(null, arguments);
    }, e._DrawingWand_StrokeDashArray = function() {
      return (e._DrawingWand_StrokeDashArray = e.asm.Ic).apply(null, arguments);
    }, e._DrawingWand_StrokeDashOffset = function() {
      return (e._DrawingWand_StrokeDashOffset = e.asm.Jc).apply(null, arguments);
    }, e._DrawingWand_StrokeLineCap = function() {
      return (e._DrawingWand_StrokeLineCap = e.asm.Kc).apply(null, arguments);
    }, e._DrawingWand_StrokeLineJoin = function() {
      return (e._DrawingWand_StrokeLineJoin = e.asm.Lc).apply(null, arguments);
    }, e._DrawingWand_StrokeMiterLimit = function() {
      return (e._DrawingWand_StrokeMiterLimit = e.asm.Mc).apply(null, arguments);
    }, e._DrawingWand_StrokeOpacity = function() {
      return (e._DrawingWand_StrokeOpacity = e.asm.Nc).apply(null, arguments);
    }, e._DrawingWand_StrokePatternUrl = function() {
      return (e._DrawingWand_StrokePatternUrl = e.asm.Oc).apply(null, arguments);
    }, e._DrawingWand_StrokeWidth = function() {
      return (e._DrawingWand_StrokeWidth = e.asm.Pc).apply(null, arguments);
    }, e._DrawingWand_Text = function() {
      return (e._DrawingWand_Text = e.asm.Qc).apply(null, arguments);
    }, e._DrawingWand_TextAlignment = function() {
      return (e._DrawingWand_TextAlignment = e.asm.Rc).apply(null, arguments);
    }, e._DrawingWand_TextAntialias = function() {
      return (e._DrawingWand_TextAntialias = e.asm.Sc).apply(null, arguments);
    }, e._DrawingWand_TextDecoration = function() {
      return (e._DrawingWand_TextDecoration = e.asm.Tc).apply(null, arguments);
    }, e._DrawingWand_TextDirection = function() {
      return (e._DrawingWand_TextDirection = e.asm.Uc).apply(null, arguments);
    }, e._DrawingWand_TextEncoding = function() {
      return (e._DrawingWand_TextEncoding = e.asm.Vc).apply(null, arguments);
    }, e._DrawingWand_TextInterlineSpacing = function() {
      return (e._DrawingWand_TextInterlineSpacing = e.asm.Wc).apply(null, arguments);
    }, e._DrawingWand_TextInterwordSpacing = function() {
      return (e._DrawingWand_TextInterwordSpacing = e.asm.Xc).apply(null, arguments);
    }, e._DrawingWand_TextKerning = function() {
      return (e._DrawingWand_TextKerning = e.asm.Yc).apply(null, arguments);
    }, e._DrawingWand_TextUnderColor = function() {
      return (e._DrawingWand_TextUnderColor = e.asm.Zc).apply(null, arguments);
    }, e._DrawingWand_Translation = function() {
      return (e._DrawingWand_Translation = e.asm._c).apply(null, arguments);
    }, e._DrawingWand_Viewbox = function() {
      return (e._DrawingWand_Viewbox = e.asm.$c).apply(null, arguments);
    }, e._MagickExceptionHelper_Description = function() {
      return (e._MagickExceptionHelper_Description = e.asm.ad).apply(null, arguments);
    }, e._MagickExceptionHelper_Dispose = function() {
      return (e._MagickExceptionHelper_Dispose = e.asm.bd).apply(null, arguments);
    }, e._MagickExceptionHelper_Related = function() {
      return (e._MagickExceptionHelper_Related = e.asm.cd).apply(null, arguments);
    }, e._MagickExceptionHelper_RelatedCount = function() {
      return (e._MagickExceptionHelper_RelatedCount = e.asm.dd).apply(null, arguments);
    }, e._MagickExceptionHelper_Message = function() {
      return (e._MagickExceptionHelper_Message = e.asm.ed).apply(null, arguments);
    }, e._MagickExceptionHelper_Severity = function() {
      return (e._MagickExceptionHelper_Severity = e.asm.fd).apply(null, arguments);
    }, e._PdfInfo_PageCount = function() {
      return (e._PdfInfo_PageCount = e.asm.gd).apply(null, arguments);
    }, e._Environment_Initialize = function() {
      return (e._Environment_Initialize = e.asm.hd).apply(null, arguments);
    }, e._Environment_GetEnv = function() {
      return (e._Environment_GetEnv = e.asm.id).apply(null, arguments);
    }, e._Environment_SetEnv = function() {
      return (e._Environment_SetEnv = e.asm.jd).apply(null, arguments);
    }, e._MagickMemory_Relinquish = function() {
      return (e._MagickMemory_Relinquish = e.asm.kd).apply(null, arguments);
    }, e._Magick_Delegates_Get = function() {
      return (e._Magick_Delegates_Get = e.asm.ld).apply(null, arguments);
    }, e._Magick_Features_Get = function() {
      return (e._Magick_Features_Get = e.asm.md).apply(null, arguments);
    }, e._Magick_ImageMagickVersion_Get = function() {
      return (e._Magick_ImageMagickVersion_Get = e.asm.nd).apply(null, arguments);
    }, e._Magick_GetFonts = function() {
      return (e._Magick_GetFonts = e.asm.od).apply(null, arguments);
    }, e._Magick_GetFontFamily = function() {
      return (e._Magick_GetFontFamily = e.asm.pd).apply(null, arguments);
    }, e._Magick_GetFontName = function() {
      return (e._Magick_GetFontName = e.asm.qd).apply(null, arguments);
    }, e._Magick_DisposeFonts = function() {
      return (e._Magick_DisposeFonts = e.asm.rd).apply(null, arguments);
    }, e._Magick_ResetRandomSeed = function() {
      return (e._Magick_ResetRandomSeed = e.asm.sd).apply(null, arguments);
    }, e._Magick_SetDefaultFontFile = function() {
      return (e._Magick_SetDefaultFontFile = e.asm.td).apply(null, arguments);
    }, e._Magick_SetRandomSeed = function() {
      return (e._Magick_SetRandomSeed = e.asm.ud).apply(null, arguments);
    }, e._Magick_SetLogDelegate = function() {
      return (e._Magick_SetLogDelegate = e.asm.vd).apply(null, arguments);
    }, e._Magick_SetLogEvents = function() {
      return (e._Magick_SetLogEvents = e.asm.wd).apply(null, arguments);
    }, e._MagickFormatInfo_CreateList = function() {
      return (e._MagickFormatInfo_CreateList = e.asm.xd).apply(null, arguments);
    }, e._MagickFormatInfo_DisposeList = function() {
      return (e._MagickFormatInfo_DisposeList = e.asm.yd).apply(null, arguments);
    }, e._MagickFormatInfo_CanReadMultithreaded_Get = function() {
      return (e._MagickFormatInfo_CanReadMultithreaded_Get = e.asm.zd).apply(null, arguments);
    }, e._MagickFormatInfo_CanWriteMultithreaded_Get = function() {
      return (e._MagickFormatInfo_CanWriteMultithreaded_Get = e.asm.Ad).apply(null, arguments);
    }, e._MagickFormatInfo_Description_Get = function() {
      return (e._MagickFormatInfo_Description_Get = e.asm.Bd).apply(null, arguments);
    }, e._MagickFormatInfo_Format_Get = function() {
      return (e._MagickFormatInfo_Format_Get = e.asm.Cd).apply(null, arguments);
    }, e._MagickFormatInfo_MimeType_Get = function() {
      return (e._MagickFormatInfo_MimeType_Get = e.asm.Dd).apply(null, arguments);
    }, e._MagickFormatInfo_Module_Get = function() {
      return (e._MagickFormatInfo_Module_Get = e.asm.Ed).apply(null, arguments);
    }, e._MagickFormatInfo_SupportsMultipleFrames_Get = function() {
      return (e._MagickFormatInfo_SupportsMultipleFrames_Get = e.asm.Fd).apply(null, arguments);
    }, e._MagickFormatInfo_SupportsReading_Get = function() {
      return (e._MagickFormatInfo_SupportsReading_Get = e.asm.Gd).apply(null, arguments);
    }, e._MagickFormatInfo_SupportsWriting_Get = function() {
      return (e._MagickFormatInfo_SupportsWriting_Get = e.asm.Hd).apply(null, arguments);
    }, e._MagickFormatInfo_GetInfo = function() {
      return (e._MagickFormatInfo_GetInfo = e.asm.Id).apply(null, arguments);
    }, e._MagickFormatInfo_GetInfoByName = function() {
      return (e._MagickFormatInfo_GetInfoByName = e.asm.Jd).apply(null, arguments);
    }, e._MagickFormatInfo_GetInfoWithBlob = function() {
      return (e._MagickFormatInfo_GetInfoWithBlob = e.asm.Kd).apply(null, arguments);
    }, e._MagickFormatInfo_Unregister = function() {
      return (e._MagickFormatInfo_Unregister = e.asm.Ld).apply(null, arguments);
    }, e._MagickImage_Create = function() {
      return (e._MagickImage_Create = e.asm.Md).apply(null, arguments);
    }, e._MagickImage_Dispose = function() {
      return (e._MagickImage_Dispose = e.asm.Nd).apply(null, arguments);
    }, e._MagickImage_AnimationDelay_Get = function() {
      return (e._MagickImage_AnimationDelay_Get = e.asm.Od).apply(null, arguments);
    }, e._MagickImage_AnimationDelay_Set = function() {
      return (e._MagickImage_AnimationDelay_Set = e.asm.Pd).apply(null, arguments);
    }, e._MagickImage_AnimationIterations_Get = function() {
      return (e._MagickImage_AnimationIterations_Get = e.asm.Qd).apply(null, arguments);
    }, e._MagickImage_AnimationIterations_Set = function() {
      return (e._MagickImage_AnimationIterations_Set = e.asm.Rd).apply(null, arguments);
    }, e._MagickImage_AnimationTicksPerSecond_Get = function() {
      return (e._MagickImage_AnimationTicksPerSecond_Get = e.asm.Sd).apply(null, arguments);
    }, e._MagickImage_AnimationTicksPerSecond_Set = function() {
      return (e._MagickImage_AnimationTicksPerSecond_Set = e.asm.Td).apply(null, arguments);
    }, e._MagickImage_BackgroundColor_Get = function() {
      return (e._MagickImage_BackgroundColor_Get = e.asm.Ud).apply(null, arguments);
    }, e._MagickImage_BackgroundColor_Set = function() {
      return (e._MagickImage_BackgroundColor_Set = e.asm.Vd).apply(null, arguments);
    }, e._MagickImage_BaseHeight_Get = function() {
      return (e._MagickImage_BaseHeight_Get = e.asm.Wd).apply(null, arguments);
    }, e._MagickImage_BaseWidth_Get = function() {
      return (e._MagickImage_BaseWidth_Get = e.asm.Xd).apply(null, arguments);
    }, e._MagickImage_BlackPointCompensation_Get = function() {
      return (e._MagickImage_BlackPointCompensation_Get = e.asm.Yd).apply(null, arguments);
    }, e._MagickImage_BlackPointCompensation_Set = function() {
      return (e._MagickImage_BlackPointCompensation_Set = e.asm.Zd).apply(null, arguments);
    }, e._MagickImage_BorderColor_Get = function() {
      return (e._MagickImage_BorderColor_Get = e.asm._d).apply(null, arguments);
    }, e._MagickImage_BorderColor_Set = function() {
      return (e._MagickImage_BorderColor_Set = e.asm.$d).apply(null, arguments);
    }, e._MagickImage_BoundingBox_Get = function() {
      return (e._MagickImage_BoundingBox_Get = e.asm.ae).apply(null, arguments);
    }, e._MagickRectangle_Create = function() {
      return (e._MagickRectangle_Create = e.asm.be).apply(null, arguments);
    }, e._MagickImage_ChannelCount_Get = function() {
      return (e._MagickImage_ChannelCount_Get = e.asm.ce).apply(null, arguments);
    }, e._MagickImage_ChromaBlue_Get = function() {
      return (e._MagickImage_ChromaBlue_Get = e.asm.de).apply(null, arguments);
    }, e._PrimaryInfo_Create = function() {
      return (e._PrimaryInfo_Create = e.asm.ee).apply(null, arguments);
    }, e._MagickImage_ChromaBlue_Set = function() {
      return (e._MagickImage_ChromaBlue_Set = e.asm.fe).apply(null, arguments);
    }, e._MagickImage_ChromaGreen_Get = function() {
      return (e._MagickImage_ChromaGreen_Get = e.asm.ge).apply(null, arguments);
    }, e._MagickImage_ChromaGreen_Set = function() {
      return (e._MagickImage_ChromaGreen_Set = e.asm.he).apply(null, arguments);
    }, e._MagickImage_ChromaRed_Get = function() {
      return (e._MagickImage_ChromaRed_Get = e.asm.ie).apply(null, arguments);
    }, e._MagickImage_ChromaRed_Set = function() {
      return (e._MagickImage_ChromaRed_Set = e.asm.je).apply(null, arguments);
    }, e._MagickImage_ChromaWhite_Get = function() {
      return (e._MagickImage_ChromaWhite_Get = e.asm.ke).apply(null, arguments);
    }, e._MagickImage_ChromaWhite_Set = function() {
      return (e._MagickImage_ChromaWhite_Set = e.asm.le).apply(null, arguments);
    }, e._MagickImage_ClassType_Get = function() {
      return (e._MagickImage_ClassType_Get = e.asm.me).apply(null, arguments);
    }, e._MagickImage_ClassType_Set = function() {
      return (e._MagickImage_ClassType_Set = e.asm.ne).apply(null, arguments);
    }, e._QuantizeSettings_Create = function() {
      return (e._QuantizeSettings_Create = e.asm.oe).apply(null, arguments);
    }, e._QuantizeSettings_Dispose = function() {
      return (e._QuantizeSettings_Dispose = e.asm.pe).apply(null, arguments);
    }, e._MagickImage_ColorFuzz_Get = function() {
      return (e._MagickImage_ColorFuzz_Get = e.asm.qe).apply(null, arguments);
    }, e._MagickImage_ColorFuzz_Set = function() {
      return (e._MagickImage_ColorFuzz_Set = e.asm.re).apply(null, arguments);
    }, e._MagickImage_ColormapSize_Get = function() {
      return (e._MagickImage_ColormapSize_Get = e.asm.se).apply(null, arguments);
    }, e._MagickImage_ColormapSize_Set = function() {
      return (e._MagickImage_ColormapSize_Set = e.asm.te).apply(null, arguments);
    }, e._MagickImage_ColorSpace_Get = function() {
      return (e._MagickImage_ColorSpace_Get = e.asm.ue).apply(null, arguments);
    }, e._MagickImage_ColorSpace_Set = function() {
      return (e._MagickImage_ColorSpace_Set = e.asm.ve).apply(null, arguments);
    }, e._MagickImage_ColorType_Get = function() {
      return (e._MagickImage_ColorType_Get = e.asm.we).apply(null, arguments);
    }, e._MagickImage_ColorType_Set = function() {
      return (e._MagickImage_ColorType_Set = e.asm.xe).apply(null, arguments);
    }, e._MagickImage_Compose_Get = function() {
      return (e._MagickImage_Compose_Get = e.asm.ye).apply(null, arguments);
    }, e._MagickImage_Compose_Set = function() {
      return (e._MagickImage_Compose_Set = e.asm.ze).apply(null, arguments);
    }, e._MagickImage_Compression_Get = function() {
      return (e._MagickImage_Compression_Get = e.asm.Ae).apply(null, arguments);
    }, e._MagickImage_Compression_Set = function() {
      return (e._MagickImage_Compression_Set = e.asm.Be).apply(null, arguments);
    }, e._MagickImage_Depth_Get = function() {
      return (e._MagickImage_Depth_Get = e.asm.Ce).apply(null, arguments);
    }, e._MagickImage_Depth_Set = function() {
      return (e._MagickImage_Depth_Set = e.asm.De).apply(null, arguments);
    }, e._MagickImage_EncodingGeometry_Get = function() {
      return (e._MagickImage_EncodingGeometry_Get = e.asm.Ee).apply(null, arguments);
    }, e._MagickImage_Endian_Get = function() {
      return (e._MagickImage_Endian_Get = e.asm.Fe).apply(null, arguments);
    }, e._MagickImage_Endian_Set = function() {
      return (e._MagickImage_Endian_Set = e.asm.Ge).apply(null, arguments);
    }, e._MagickImage_FileName_Get = function() {
      return (e._MagickImage_FileName_Get = e.asm.He).apply(null, arguments);
    }, e._MagickImage_FileName_Set = function() {
      return (e._MagickImage_FileName_Set = e.asm.Ie).apply(null, arguments);
    }, e._MagickImage_FilterType_Get = function() {
      return (e._MagickImage_FilterType_Get = e.asm.Je).apply(null, arguments);
    }, e._MagickImage_FilterType_Set = function() {
      return (e._MagickImage_FilterType_Set = e.asm.Ke).apply(null, arguments);
    }, e._MagickImage_Format_Get = function() {
      return (e._MagickImage_Format_Get = e.asm.Le).apply(null, arguments);
    }, e._MagickImage_Format_Set = function() {
      return (e._MagickImage_Format_Set = e.asm.Me).apply(null, arguments);
    }, e._MagickImage_Gamma_Get = function() {
      return (e._MagickImage_Gamma_Get = e.asm.Ne).apply(null, arguments);
    }, e._MagickImage_GifDisposeMethod_Get = function() {
      return (e._MagickImage_GifDisposeMethod_Get = e.asm.Oe).apply(null, arguments);
    }, e._MagickImage_GifDisposeMethod_Set = function() {
      return (e._MagickImage_GifDisposeMethod_Set = e.asm.Pe).apply(null, arguments);
    }, e._MagickImage_HasAlpha_Get = function() {
      return (e._MagickImage_HasAlpha_Get = e.asm.Qe).apply(null, arguments);
    }, e._MagickImage_HasAlpha_Set = function() {
      return (e._MagickImage_HasAlpha_Set = e.asm.Re).apply(null, arguments);
    }, e._MagickImage_Height_Get = function() {
      return (e._MagickImage_Height_Get = e.asm.Se).apply(null, arguments);
    }, e._MagickImage_Interlace_Get = function() {
      return (e._MagickImage_Interlace_Get = e.asm.Te).apply(null, arguments);
    }, e._MagickImage_Interlace_Set = function() {
      return (e._MagickImage_Interlace_Set = e.asm.Ue).apply(null, arguments);
    }, e._MagickImage_Interpolate_Get = function() {
      return (e._MagickImage_Interpolate_Get = e.asm.Ve).apply(null, arguments);
    }, e._MagickImage_Interpolate_Set = function() {
      return (e._MagickImage_Interpolate_Set = e.asm.We).apply(null, arguments);
    }, e._MagickImage_IsOpaque_Get = function() {
      return (e._MagickImage_IsOpaque_Get = e.asm.Xe).apply(null, arguments);
    }, e._MagickImage_MatteColor_Get = function() {
      return (e._MagickImage_MatteColor_Get = e.asm.Ye).apply(null, arguments);
    }, e._MagickImage_MatteColor_Set = function() {
      return (e._MagickImage_MatteColor_Set = e.asm.Ze).apply(null, arguments);
    }, e._MagickImage_MeanErrorPerPixel_Get = function() {
      return (e._MagickImage_MeanErrorPerPixel_Get = e.asm._e).apply(null, arguments);
    }, e._MagickImage_MetaChannelCount_Get = function() {
      return (e._MagickImage_MetaChannelCount_Get = e.asm.$e).apply(null, arguments);
    }, e._MagickImage_MetaChannelCount_Set = function() {
      return (e._MagickImage_MetaChannelCount_Set = e.asm.af).apply(null, arguments);
    }, e._MagickImage_NormalizedMaximumError_Get = function() {
      return (e._MagickImage_NormalizedMaximumError_Get = e.asm.bf).apply(null, arguments);
    }, e._MagickImage_NormalizedMeanError_Get = function() {
      return (e._MagickImage_NormalizedMeanError_Get = e.asm.cf).apply(null, arguments);
    }, e._MagickImage_Orientation_Get = function() {
      return (e._MagickImage_Orientation_Get = e.asm.df).apply(null, arguments);
    }, e._MagickImage_Orientation_Set = function() {
      return (e._MagickImage_Orientation_Set = e.asm.ef).apply(null, arguments);
    }, e._MagickImage_Page_Get = function() {
      return (e._MagickImage_Page_Get = e.asm.ff).apply(null, arguments);
    }, e._MagickImage_Page_Set = function() {
      return (e._MagickImage_Page_Set = e.asm.gf).apply(null, arguments);
    }, e._MagickImage_Quality_Get = function() {
      return (e._MagickImage_Quality_Get = e.asm.hf).apply(null, arguments);
    }, e._MagickImage_Quality_Set = function() {
      return (e._MagickImage_Quality_Set = e.asm.jf).apply(null, arguments);
    }, e._MagickImage_RenderingIntent_Get = function() {
      return (e._MagickImage_RenderingIntent_Get = e.asm.kf).apply(null, arguments);
    }, e._MagickImage_RenderingIntent_Set = function() {
      return (e._MagickImage_RenderingIntent_Set = e.asm.lf).apply(null, arguments);
    }, e._MagickImage_ResolutionUnits_Get = function() {
      return (e._MagickImage_ResolutionUnits_Get = e.asm.mf).apply(null, arguments);
    }, e._MagickImage_ResolutionUnits_Set = function() {
      return (e._MagickImage_ResolutionUnits_Set = e.asm.nf).apply(null, arguments);
    }, e._MagickImage_ResolutionX_Get = function() {
      return (e._MagickImage_ResolutionX_Get = e.asm.of).apply(null, arguments);
    }, e._MagickImage_ResolutionX_Set = function() {
      return (e._MagickImage_ResolutionX_Set = e.asm.pf).apply(null, arguments);
    }, e._MagickImage_ResolutionY_Get = function() {
      return (e._MagickImage_ResolutionY_Get = e.asm.qf).apply(null, arguments);
    }, e._MagickImage_ResolutionY_Set = function() {
      return (e._MagickImage_ResolutionY_Set = e.asm.rf).apply(null, arguments);
    }, e._MagickImage_Signature_Get = function() {
      return (e._MagickImage_Signature_Get = e.asm.sf).apply(null, arguments);
    }, e._MagickImage_TotalColors_Get = function() {
      return (e._MagickImage_TotalColors_Get = e.asm.tf).apply(null, arguments);
    }, e._MagickImage_VirtualPixelMethod_Get = function() {
      return (e._MagickImage_VirtualPixelMethod_Get = e.asm.uf).apply(null, arguments);
    }, e._MagickImage_VirtualPixelMethod_Set = function() {
      return (e._MagickImage_VirtualPixelMethod_Set = e.asm.vf).apply(null, arguments);
    }, e._MagickImage_Width_Get = function() {
      return (e._MagickImage_Width_Get = e.asm.wf).apply(null, arguments);
    }, e._MagickImage_AdaptiveBlur = function() {
      return (e._MagickImage_AdaptiveBlur = e.asm.xf).apply(null, arguments);
    }, e._MagickImage_AdaptiveResize = function() {
      return (e._MagickImage_AdaptiveResize = e.asm.yf).apply(null, arguments);
    }, e._MagickImage_AdaptiveSharpen = function() {
      return (e._MagickImage_AdaptiveSharpen = e.asm.zf).apply(null, arguments);
    }, e._MagickImage_AdaptiveThreshold = function() {
      return (e._MagickImage_AdaptiveThreshold = e.asm.Af).apply(null, arguments);
    }, e._MagickImage_AddNoise = function() {
      return (e._MagickImage_AddNoise = e.asm.Bf).apply(null, arguments);
    }, e._MagickImage_AffineTransform = function() {
      return (e._MagickImage_AffineTransform = e.asm.Cf).apply(null, arguments);
    }, e._MagickImage_Annotate = function() {
      return (e._MagickImage_Annotate = e.asm.Df).apply(null, arguments);
    }, e._MagickImage_AnnotateGravity = function() {
      return (e._MagickImage_AnnotateGravity = e.asm.Ef).apply(null, arguments);
    }, e._MagickImage_AutoGamma = function() {
      return (e._MagickImage_AutoGamma = e.asm.Ff).apply(null, arguments);
    }, e._MagickImage_AutoLevel = function() {
      return (e._MagickImage_AutoLevel = e.asm.Gf).apply(null, arguments);
    }, e._MagickImage_AutoOrient = function() {
      return (e._MagickImage_AutoOrient = e.asm.Hf).apply(null, arguments);
    }, e._MagickImage_AutoThreshold = function() {
      return (e._MagickImage_AutoThreshold = e.asm.If).apply(null, arguments);
    }, e._MagickImage_BilateralBlur = function() {
      return (e._MagickImage_BilateralBlur = e.asm.Jf).apply(null, arguments);
    }, e._MagickImage_BlackThreshold = function() {
      return (e._MagickImage_BlackThreshold = e.asm.Kf).apply(null, arguments);
    }, e._MagickImage_BlueShift = function() {
      return (e._MagickImage_BlueShift = e.asm.Lf).apply(null, arguments);
    }, e._MagickImage_Blur = function() {
      return (e._MagickImage_Blur = e.asm.Mf).apply(null, arguments);
    }, e._MagickImage_Border = function() {
      return (e._MagickImage_Border = e.asm.Nf).apply(null, arguments);
    }, e._MagickImage_BrightnessContrast = function() {
      return (e._MagickImage_BrightnessContrast = e.asm.Of).apply(null, arguments);
    }, e._MagickImage_CannyEdge = function() {
      return (e._MagickImage_CannyEdge = e.asm.Pf).apply(null, arguments);
    }, e._MagickImage_ChannelOffset = function() {
      return (e._MagickImage_ChannelOffset = e.asm.Qf).apply(null, arguments);
    }, e._MagickImage_Charcoal = function() {
      return (e._MagickImage_Charcoal = e.asm.Rf).apply(null, arguments);
    }, e._MagickImage_Chop = function() {
      return (e._MagickImage_Chop = e.asm.Sf).apply(null, arguments);
    }, e._MagickImage_Clahe = function() {
      return (e._MagickImage_Clahe = e.asm.Tf).apply(null, arguments);
    }, e._MagickImage_Clamp = function() {
      return (e._MagickImage_Clamp = e.asm.Uf).apply(null, arguments);
    }, e._MagickImage_ClipPath = function() {
      return (e._MagickImage_ClipPath = e.asm.Vf).apply(null, arguments);
    }, e._MagickImage_Clone = function() {
      return (e._MagickImage_Clone = e.asm.Wf).apply(null, arguments);
    }, e._MagickImage_CloneArea = function() {
      return (e._MagickImage_CloneArea = e.asm.Xf).apply(null, arguments);
    }, e._MagickImage_Clut = function() {
      return (e._MagickImage_Clut = e.asm.Yf).apply(null, arguments);
    }, e._MagickImage_ColorDecisionList = function() {
      return (e._MagickImage_ColorDecisionList = e.asm.Zf).apply(null, arguments);
    }, e._MagickImage_Colorize = function() {
      return (e._MagickImage_Colorize = e.asm._f).apply(null, arguments);
    }, e._MagickImage_ColorMatrix = function() {
      return (e._MagickImage_ColorMatrix = e.asm.$f).apply(null, arguments);
    }, e._MagickImage_ColorThreshold = function() {
      return (e._MagickImage_ColorThreshold = e.asm.ag).apply(null, arguments);
    }, e._MagickImage_Compare = function() {
      return (e._MagickImage_Compare = e.asm.bg).apply(null, arguments);
    }, e._MagickImage_CompareDistortion = function() {
      return (e._MagickImage_CompareDistortion = e.asm.cg).apply(null, arguments);
    }, e._MagickImage_Composite = function() {
      return (e._MagickImage_Composite = e.asm.dg).apply(null, arguments);
    }, e._MagickImage_CompositeGravity = function() {
      return (e._MagickImage_CompositeGravity = e.asm.eg).apply(null, arguments);
    }, e._MagickImage_ConnectedComponents = function() {
      return (e._MagickImage_ConnectedComponents = e.asm.fg).apply(null, arguments);
    }, e._MagickImage_Contrast = function() {
      return (e._MagickImage_Contrast = e.asm.gg).apply(null, arguments);
    }, e._MagickImage_ContrastStretch = function() {
      return (e._MagickImage_ContrastStretch = e.asm.hg).apply(null, arguments);
    }, e._MagickImage_ConvexHull = function() {
      return (e._MagickImage_ConvexHull = e.asm.ig).apply(null, arguments);
    }, e._MagickImage_Convolve = function() {
      return (e._MagickImage_Convolve = e.asm.jg).apply(null, arguments);
    }, e._MagickImage_CopyPixels = function() {
      return (e._MagickImage_CopyPixels = e.asm.kg).apply(null, arguments);
    }, e._MagickImage_Crop = function() {
      return (e._MagickImage_Crop = e.asm.lg).apply(null, arguments);
    }, e._MagickImage_CropToTiles = function() {
      return (e._MagickImage_CropToTiles = e.asm.mg).apply(null, arguments);
    }, e._MagickImage_CycleColormap = function() {
      return (e._MagickImage_CycleColormap = e.asm.ng).apply(null, arguments);
    }, e._MagickImage_Decipher = function() {
      return (e._MagickImage_Decipher = e.asm.og).apply(null, arguments);
    }, e._MagickImage_Deskew = function() {
      return (e._MagickImage_Deskew = e.asm.pg).apply(null, arguments);
    }, e._MagickImage_Despeckle = function() {
      return (e._MagickImage_Despeckle = e.asm.qg).apply(null, arguments);
    }, e._MagickImage_DetermineBitDepth = function() {
      return (e._MagickImage_DetermineBitDepth = e.asm.rg).apply(null, arguments);
    }, e._MagickImage_DetermineColorType = function() {
      return (e._MagickImage_DetermineColorType = e.asm.sg).apply(null, arguments);
    }, e._MagickImage_Distort = function() {
      return (e._MagickImage_Distort = e.asm.tg).apply(null, arguments);
    }, e._MagickImage_Edge = function() {
      return (e._MagickImage_Edge = e.asm.ug).apply(null, arguments);
    }, e._MagickImage_Emboss = function() {
      return (e._MagickImage_Emboss = e.asm.vg).apply(null, arguments);
    }, e._MagickImage_Encipher = function() {
      return (e._MagickImage_Encipher = e.asm.wg).apply(null, arguments);
    }, e._MagickImage_Enhance = function() {
      return (e._MagickImage_Enhance = e.asm.xg).apply(null, arguments);
    }, e._MagickImage_Equalize = function() {
      return (e._MagickImage_Equalize = e.asm.yg).apply(null, arguments);
    }, e._MagickImage_Equals = function() {
      return (e._MagickImage_Equals = e.asm.zg).apply(null, arguments);
    }, e._MagickImage_EvaluateFunction = function() {
      return (e._MagickImage_EvaluateFunction = e.asm.Ag).apply(null, arguments);
    }, e._MagickImage_EvaluateGeometry = function() {
      return (e._MagickImage_EvaluateGeometry = e.asm.Bg).apply(null, arguments);
    }, e._MagickImage_EvaluateOperator = function() {
      return (e._MagickImage_EvaluateOperator = e.asm.Cg).apply(null, arguments);
    }, e._MagickImage_Extent = function() {
      return (e._MagickImage_Extent = e.asm.Dg).apply(null, arguments);
    }, e._MagickImage_Flip = function() {
      return (e._MagickImage_Flip = e.asm.Eg).apply(null, arguments);
    }, e._MagickImage_FloodFill = function() {
      return (e._MagickImage_FloodFill = e.asm.Fg).apply(null, arguments);
    }, e._MagickImage_Flop = function() {
      return (e._MagickImage_Flop = e.asm.Gg).apply(null, arguments);
    }, e._MagickImage_FontTypeMetrics = function() {
      return (e._MagickImage_FontTypeMetrics = e.asm.Hg).apply(null, arguments);
    }, e._MagickImage_FormatExpression = function() {
      return (e._MagickImage_FormatExpression = e.asm.Ig).apply(null, arguments);
    }, e._MagickImage_Frame = function() {
      return (e._MagickImage_Frame = e.asm.Jg).apply(null, arguments);
    }, e._MagickImage_Fx = function() {
      return (e._MagickImage_Fx = e.asm.Kg).apply(null, arguments);
    }, e._MagickImage_GammaCorrect = function() {
      return (e._MagickImage_GammaCorrect = e.asm.Lg).apply(null, arguments);
    }, e._MagickImage_GaussianBlur = function() {
      return (e._MagickImage_GaussianBlur = e.asm.Mg).apply(null, arguments);
    }, e._MagickImage_GetArtifact = function() {
      return (e._MagickImage_GetArtifact = e.asm.Ng).apply(null, arguments);
    }, e._MagickImage_GetAttribute = function() {
      return (e._MagickImage_GetAttribute = e.asm.Og).apply(null, arguments);
    }, e._MagickImage_GetColormapColor = function() {
      return (e._MagickImage_GetColormapColor = e.asm.Pg).apply(null, arguments);
    }, e._MagickImage_GetNext = function() {
      return (e._MagickImage_GetNext = e.asm.Qg).apply(null, arguments);
    }, e._MagickImage_GetNextArtifactName = function() {
      return (e._MagickImage_GetNextArtifactName = e.asm.Rg).apply(null, arguments);
    }, e._MagickImage_GetNextAttributeName = function() {
      return (e._MagickImage_GetNextAttributeName = e.asm.Sg).apply(null, arguments);
    }, e._MagickImage_GetNextProfileName = function() {
      return (e._MagickImage_GetNextProfileName = e.asm.Tg).apply(null, arguments);
    }, e._MagickImage_GetProfile = function() {
      return (e._MagickImage_GetProfile = e.asm.Ug).apply(null, arguments);
    }, e._MagickImage_GetReadMask = function() {
      return (e._MagickImage_GetReadMask = e.asm.Vg).apply(null, arguments);
    }, e._MagickImage_GetWriteMask = function() {
      return (e._MagickImage_GetWriteMask = e.asm.Wg).apply(null, arguments);
    }, e._MagickImage_Grayscale = function() {
      return (e._MagickImage_Grayscale = e.asm.Xg).apply(null, arguments);
    }, e._MagickImage_HaldClut = function() {
      return (e._MagickImage_HaldClut = e.asm.Yg).apply(null, arguments);
    }, e._MagickImage_HasChannel = function() {
      return (e._MagickImage_HasChannel = e.asm.Zg).apply(null, arguments);
    }, e._MagickImage_HasProfile = function() {
      return (e._MagickImage_HasProfile = e.asm._g).apply(null, arguments);
    }, e._MagickImage_Histogram = function() {
      return (e._MagickImage_Histogram = e.asm.$g).apply(null, arguments);
    }, e._MagickImage_HoughLine = function() {
      return (e._MagickImage_HoughLine = e.asm.ah).apply(null, arguments);
    }, e._MagickImage_Implode = function() {
      return (e._MagickImage_Implode = e.asm.bh).apply(null, arguments);
    }, e._MagickImage_ImportPixels = function() {
      return (e._MagickImage_ImportPixels = e.asm.ch).apply(null, arguments);
    }, e._MagickImage_Integral = function() {
      return (e._MagickImage_Integral = e.asm.dh).apply(null, arguments);
    }, e._MagickImage_InterpolativeResize = function() {
      return (e._MagickImage_InterpolativeResize = e.asm.eh).apply(null, arguments);
    }, e._MagickImage_InverseLevel = function() {
      return (e._MagickImage_InverseLevel = e.asm.fh).apply(null, arguments);
    }, e._MagickImage_Kmeans = function() {
      return (e._MagickImage_Kmeans = e.asm.gh).apply(null, arguments);
    }, e._MagickImage_Kuwahara = function() {
      return (e._MagickImage_Kuwahara = e.asm.hh).apply(null, arguments);
    }, e._MagickImage_Level = function() {
      return (e._MagickImage_Level = e.asm.ih).apply(null, arguments);
    }, e._MagickImage_LevelColors = function() {
      return (e._MagickImage_LevelColors = e.asm.jh).apply(null, arguments);
    }, e._MagickImage_LinearStretch = function() {
      return (e._MagickImage_LinearStretch = e.asm.kh).apply(null, arguments);
    }, e._MagickImage_LiquidRescale = function() {
      return (e._MagickImage_LiquidRescale = e.asm.lh).apply(null, arguments);
    }, e._MagickImage_LocalContrast = function() {
      return (e._MagickImage_LocalContrast = e.asm.mh).apply(null, arguments);
    }, e._MagickImage_Magnify = function() {
      return (e._MagickImage_Magnify = e.asm.nh).apply(null, arguments);
    }, e._MagickImage_MeanShift = function() {
      return (e._MagickImage_MeanShift = e.asm.oh).apply(null, arguments);
    }, e._MagickImage_Minify = function() {
      return (e._MagickImage_Minify = e.asm.ph).apply(null, arguments);
    }, e._MagickImage_MinimumBoundingBox = function() {
      return (e._MagickImage_MinimumBoundingBox = e.asm.qh).apply(null, arguments);
    }, e._MagickImage_Modulate = function() {
      return (e._MagickImage_Modulate = e.asm.rh).apply(null, arguments);
    }, e._MagickImage_Moments = function() {
      return (e._MagickImage_Moments = e.asm.sh).apply(null, arguments);
    }, e._MagickImage_Morphology = function() {
      return (e._MagickImage_Morphology = e.asm.th).apply(null, arguments);
    }, e._MagickImage_MotionBlur = function() {
      return (e._MagickImage_MotionBlur = e.asm.uh).apply(null, arguments);
    }, e._MagickImage_Negate = function() {
      return (e._MagickImage_Negate = e.asm.vh).apply(null, arguments);
    }, e._MagickImage_Normalize = function() {
      return (e._MagickImage_Normalize = e.asm.wh).apply(null, arguments);
    }, e._MagickImage_OilPaint = function() {
      return (e._MagickImage_OilPaint = e.asm.xh).apply(null, arguments);
    }, e._MagickImage_Opaque = function() {
      return (e._MagickImage_Opaque = e.asm.yh).apply(null, arguments);
    }, e._MagickImage_OrderedDither = function() {
      return (e._MagickImage_OrderedDither = e.asm.zh).apply(null, arguments);
    }, e._MagickImage_Perceptible = function() {
      return (e._MagickImage_Perceptible = e.asm.Ah).apply(null, arguments);
    }, e._MagickImage_PerceptualHash = function() {
      return (e._MagickImage_PerceptualHash = e.asm.Bh).apply(null, arguments);
    }, e._MagickImage_Quantize = function() {
      return (e._MagickImage_Quantize = e.asm.Ch).apply(null, arguments);
    }, e._MagickImage_Polaroid = function() {
      return (e._MagickImage_Polaroid = e.asm.Dh).apply(null, arguments);
    }, e._MagickImage_Posterize = function() {
      return (e._MagickImage_Posterize = e.asm.Eh).apply(null, arguments);
    }, e._MagickImage_RaiseOrLower = function() {
      return (e._MagickImage_RaiseOrLower = e.asm.Fh).apply(null, arguments);
    }, e._MagickImage_RandomThreshold = function() {
      return (e._MagickImage_RandomThreshold = e.asm.Gh).apply(null, arguments);
    }, e._MagickImage_RangeThreshold = function() {
      return (e._MagickImage_RangeThreshold = e.asm.Hh).apply(null, arguments);
    }, e._MagickImage_ReadBlob = function() {
      return (e._MagickImage_ReadBlob = e.asm.Ih).apply(null, arguments);
    }, e._MagickImage_ReadFile = function() {
      return (e._MagickImage_ReadFile = e.asm.Jh).apply(null, arguments);
    }, e._MagickImage_ReadPixels = function() {
      return (e._MagickImage_ReadPixels = e.asm.Kh).apply(null, arguments);
    }, e._MagickImage_ReadStream = function() {
      return (e._MagickImage_ReadStream = e.asm.Lh).apply(null, arguments);
    }, e._MagickImage_RegionMask = function() {
      return (e._MagickImage_RegionMask = e.asm.Mh).apply(null, arguments);
    }, e._MagickImage_Remap = function() {
      return (e._MagickImage_Remap = e.asm.Nh).apply(null, arguments);
    }, e._MagickImage_RemoveArtifact = function() {
      return (e._MagickImage_RemoveArtifact = e.asm.Oh).apply(null, arguments);
    }, e._MagickImage_RemoveAttribute = function() {
      return (e._MagickImage_RemoveAttribute = e.asm.Ph).apply(null, arguments);
    }, e._MagickImage_RemoveProfile = function() {
      return (e._MagickImage_RemoveProfile = e.asm.Qh).apply(null, arguments);
    }, e._MagickImage_ResetArtifactIterator = function() {
      return (e._MagickImage_ResetArtifactIterator = e.asm.Rh).apply(null, arguments);
    }, e._MagickImage_ResetAttributeIterator = function() {
      return (e._MagickImage_ResetAttributeIterator = e.asm.Sh).apply(null, arguments);
    }, e._MagickImage_ResetProfileIterator = function() {
      return (e._MagickImage_ResetProfileIterator = e.asm.Th).apply(null, arguments);
    }, e._MagickImage_Resample = function() {
      return (e._MagickImage_Resample = e.asm.Uh).apply(null, arguments);
    }, e._MagickImage_Resize = function() {
      return (e._MagickImage_Resize = e.asm.Vh).apply(null, arguments);
    }, e._MagickImage_Roll = function() {
      return (e._MagickImage_Roll = e.asm.Wh).apply(null, arguments);
    }, e._MagickImage_Rotate = function() {
      return (e._MagickImage_Rotate = e.asm.Xh).apply(null, arguments);
    }, e._MagickImage_RotationalBlur = function() {
      return (e._MagickImage_RotationalBlur = e.asm.Yh).apply(null, arguments);
    }, e._MagickImage_Sample = function() {
      return (e._MagickImage_Sample = e.asm.Zh).apply(null, arguments);
    }, e._MagickImage_Scale = function() {
      return (e._MagickImage_Scale = e.asm._h).apply(null, arguments);
    }, e._MagickImage_Segment = function() {
      return (e._MagickImage_Segment = e.asm.$h).apply(null, arguments);
    }, e._MagickImage_SelectiveBlur = function() {
      return (e._MagickImage_SelectiveBlur = e.asm.ai).apply(null, arguments);
    }, e._MagickImage_Separate = function() {
      return (e._MagickImage_Separate = e.asm.bi).apply(null, arguments);
    }, e._MagickImage_SepiaTone = function() {
      return (e._MagickImage_SepiaTone = e.asm.ci).apply(null, arguments);
    }, e._MagickImage_SetAlpha = function() {
      return (e._MagickImage_SetAlpha = e.asm.di).apply(null, arguments);
    }, e._MagickImage_SetArtifact = function() {
      return (e._MagickImage_SetArtifact = e.asm.ei).apply(null, arguments);
    }, e._MagickImage_SetAttribute = function() {
      return (e._MagickImage_SetAttribute = e.asm.fi).apply(null, arguments);
    }, e._MagickImage_SetBitDepth = function() {
      return (e._MagickImage_SetBitDepth = e.asm.gi).apply(null, arguments);
    }, e._MagickImage_SetClientData = function() {
      return (e._MagickImage_SetClientData = e.asm.hi).apply(null, arguments);
    }, e._MagickImage_SetColormapColor = function() {
      return (e._MagickImage_SetColormapColor = e.asm.ii).apply(null, arguments);
    }, e._MagickImage_SetColorMetric = function() {
      return (e._MagickImage_SetColorMetric = e.asm.ji).apply(null, arguments);
    }, e._MagickImage_SetNext = function() {
      return (e._MagickImage_SetNext = e.asm.ki).apply(null, arguments);
    }, e._MagickImage_SetProfile = function() {
      return (e._MagickImage_SetProfile = e.asm.li).apply(null, arguments);
    }, e._MagickImage_SetProgressDelegate = function() {
      return (e._MagickImage_SetProgressDelegate = e.asm.mi).apply(null, arguments);
    }, e._MagickImage_SetReadMask = function() {
      return (e._MagickImage_SetReadMask = e.asm.ni).apply(null, arguments);
    }, e._MagickImage_SetWriteMask = function() {
      return (e._MagickImage_SetWriteMask = e.asm.oi).apply(null, arguments);
    }, e._MagickImage_Shade = function() {
      return (e._MagickImage_Shade = e.asm.pi).apply(null, arguments);
    }, e._MagickImage_Shadow = function() {
      return (e._MagickImage_Shadow = e.asm.qi).apply(null, arguments);
    }, e._MagickImage_Sharpen = function() {
      return (e._MagickImage_Sharpen = e.asm.ri).apply(null, arguments);
    }, e._MagickImage_Shave = function() {
      return (e._MagickImage_Shave = e.asm.si).apply(null, arguments);
    }, e._MagickImage_Shear = function() {
      return (e._MagickImage_Shear = e.asm.ti).apply(null, arguments);
    }, e._MagickImage_SigmoidalContrast = function() {
      return (e._MagickImage_SigmoidalContrast = e.asm.ui).apply(null, arguments);
    }, e._MagickImage_SparseColor = function() {
      return (e._MagickImage_SparseColor = e.asm.vi).apply(null, arguments);
    }, e._MagickImage_Spread = function() {
      return (e._MagickImage_Spread = e.asm.wi).apply(null, arguments);
    }, e._MagickImage_Sketch = function() {
      return (e._MagickImage_Sketch = e.asm.xi).apply(null, arguments);
    }, e._MagickImage_Solarize = function() {
      return (e._MagickImage_Solarize = e.asm.yi).apply(null, arguments);
    }, e._MagickImage_SortPixels = function() {
      return (e._MagickImage_SortPixels = e.asm.zi).apply(null, arguments);
    }, e._MagickImage_Splice = function() {
      return (e._MagickImage_Splice = e.asm.Ai).apply(null, arguments);
    }, e._MagickImage_Statistic = function() {
      return (e._MagickImage_Statistic = e.asm.Bi).apply(null, arguments);
    }, e._MagickImage_Statistics = function() {
      return (e._MagickImage_Statistics = e.asm.Ci).apply(null, arguments);
    }, e._MagickImage_Stegano = function() {
      return (e._MagickImage_Stegano = e.asm.Di).apply(null, arguments);
    }, e._MagickImage_Stereo = function() {
      return (e._MagickImage_Stereo = e.asm.Ei).apply(null, arguments);
    }, e._MagickImage_Strip = function() {
      return (e._MagickImage_Strip = e.asm.Fi).apply(null, arguments);
    }, e._MagickImage_SubImageSearch = function() {
      return (e._MagickImage_SubImageSearch = e.asm.Gi).apply(null, arguments);
    }, e._MagickImage_Swirl = function() {
      return (e._MagickImage_Swirl = e.asm.Hi).apply(null, arguments);
    }, e._MagickImage_Texture = function() {
      return (e._MagickImage_Texture = e.asm.Ii).apply(null, arguments);
    }, e._MagickImage_Threshold = function() {
      return (e._MagickImage_Threshold = e.asm.Ji).apply(null, arguments);
    }, e._MagickImage_Thumbnail = function() {
      return (e._MagickImage_Thumbnail = e.asm.Ki).apply(null, arguments);
    }, e._MagickImage_Tint = function() {
      return (e._MagickImage_Tint = e.asm.Li).apply(null, arguments);
    }, e._MagickImage_Transparent = function() {
      return (e._MagickImage_Transparent = e.asm.Mi).apply(null, arguments);
    }, e._MagickImage_TransparentChroma = function() {
      return (e._MagickImage_TransparentChroma = e.asm.Ni).apply(null, arguments);
    }, e._MagickImage_Transpose = function() {
      return (e._MagickImage_Transpose = e.asm.Oi).apply(null, arguments);
    }, e._MagickImage_Transverse = function() {
      return (e._MagickImage_Transverse = e.asm.Pi).apply(null, arguments);
    }, e._MagickImage_Trim = function() {
      return (e._MagickImage_Trim = e.asm.Qi).apply(null, arguments);
    }, e._MagickImage_UniqueColors = function() {
      return (e._MagickImage_UniqueColors = e.asm.Ri).apply(null, arguments);
    }, e._MagickImage_UnsharpMask = function() {
      return (e._MagickImage_UnsharpMask = e.asm.Si).apply(null, arguments);
    }, e._MagickImage_Vignette = function() {
      return (e._MagickImage_Vignette = e.asm.Ti).apply(null, arguments);
    }, e._MagickImage_Wave = function() {
      return (e._MagickImage_Wave = e.asm.Ui).apply(null, arguments);
    }, e._MagickImage_WaveletDenoise = function() {
      return (e._MagickImage_WaveletDenoise = e.asm.Vi).apply(null, arguments);
    }, e._MagickImage_WhiteBalance = function() {
      return (e._MagickImage_WhiteBalance = e.asm.Wi).apply(null, arguments);
    }, e._MagickImage_WhiteThreshold = function() {
      return (e._MagickImage_WhiteThreshold = e.asm.Xi).apply(null, arguments);
    }, e._MagickImage_WriteBlob = function() {
      return (e._MagickImage_WriteBlob = e.asm.Yi).apply(null, arguments);
    }, e._MagickImage_WriteFile = function() {
      return (e._MagickImage_WriteFile = e.asm.Zi).apply(null, arguments);
    }, e._MagickImage_WriteStream = function() {
      return (e._MagickImage_WriteStream = e.asm._i).apply(null, arguments);
    }, e._MagickImageCollection_Append = function() {
      return (e._MagickImageCollection_Append = e.asm.$i).apply(null, arguments);
    }, e._MagickImageCollection_Coalesce = function() {
      return (e._MagickImageCollection_Coalesce = e.asm.aj).apply(null, arguments);
    }, e._MagickImageCollection_Combine = function() {
      return (e._MagickImageCollection_Combine = e.asm.bj).apply(null, arguments);
    }, e._MagickImageCollection_Complex = function() {
      return (e._MagickImageCollection_Complex = e.asm.cj).apply(null, arguments);
    }, e._MagickImageCollection_Deconstruct = function() {
      return (e._MagickImageCollection_Deconstruct = e.asm.dj).apply(null, arguments);
    }, e._MagickImageCollection_Dispose = function() {
      return (e._MagickImageCollection_Dispose = e.asm.ej).apply(null, arguments);
    }, e._MagickImageCollection_Evaluate = function() {
      return (e._MagickImageCollection_Evaluate = e.asm.fj).apply(null, arguments);
    }, e._MagickImageCollection_Fx = function() {
      return (e._MagickImageCollection_Fx = e.asm.gj).apply(null, arguments);
    }, e._MagickImageCollection_Merge = function() {
      return (e._MagickImageCollection_Merge = e.asm.hj).apply(null, arguments);
    }, e._MagickImageCollection_Montage = function() {
      return (e._MagickImageCollection_Montage = e.asm.ij).apply(null, arguments);
    }, e._MagickImageCollection_Morph = function() {
      return (e._MagickImageCollection_Morph = e.asm.jj).apply(null, arguments);
    }, e._MagickImageCollection_Optimize = function() {
      return (e._MagickImageCollection_Optimize = e.asm.kj).apply(null, arguments);
    }, e._MagickImageCollection_OptimizePlus = function() {
      return (e._MagickImageCollection_OptimizePlus = e.asm.lj).apply(null, arguments);
    }, e._MagickImageCollection_OptimizeTransparency = function() {
      return (e._MagickImageCollection_OptimizeTransparency = e.asm.mj).apply(null, arguments);
    }, e._MagickImageCollection_Polynomial = function() {
      return (e._MagickImageCollection_Polynomial = e.asm.nj).apply(null, arguments);
    }, e._MagickImageCollection_Quantize = function() {
      return (e._MagickImageCollection_Quantize = e.asm.oj).apply(null, arguments);
    }, e._MagickImageCollection_ReadBlob = function() {
      return (e._MagickImageCollection_ReadBlob = e.asm.pj).apply(null, arguments);
    }, e._MagickImageCollection_ReadFile = function() {
      return (e._MagickImageCollection_ReadFile = e.asm.qj).apply(null, arguments);
    }, e._MagickImageCollection_ReadStream = function() {
      return (e._MagickImageCollection_ReadStream = e.asm.rj).apply(null, arguments);
    }, e._MagickImageCollection_Remap = function() {
      return (e._MagickImageCollection_Remap = e.asm.sj).apply(null, arguments);
    }, e._MagickImageCollection_Smush = function() {
      return (e._MagickImageCollection_Smush = e.asm.tj).apply(null, arguments);
    }, e._MagickImageCollection_WriteFile = function() {
      return (e._MagickImageCollection_WriteFile = e.asm.uj).apply(null, arguments);
    }, e._MagickImageCollection_WriteStream = function() {
      return (e._MagickImageCollection_WriteStream = e.asm.vj).apply(null, arguments);
    }, e._DoubleMatrix_Create = function() {
      return (e._DoubleMatrix_Create = e.asm.wj).apply(null, arguments);
    }, e._DoubleMatrix_Dispose = function() {
      return (e._DoubleMatrix_Dispose = e.asm.xj).apply(null, arguments);
    }, e._OpenCL_GetDevices = function() {
      return (e._OpenCL_GetDevices = e.asm.yj).apply(null, arguments);
    }, e._OpenCL_GetDevice = function() {
      return (e._OpenCL_GetDevice = e.asm.zj).apply(null, arguments);
    }, e._OpenCL_GetEnabled = function() {
      return (e._OpenCL_GetEnabled = e.asm.Aj).apply(null, arguments);
    }, e._OpenCL_SetEnabled = function() {
      return (e._OpenCL_SetEnabled = e.asm.Bj).apply(null, arguments);
    }, e._OpenCLDevice_DeviceType_Get = function() {
      return (e._OpenCLDevice_DeviceType_Get = e.asm.Cj).apply(null, arguments);
    }, e._OpenCLDevice_BenchmarkScore_Get = function() {
      return (e._OpenCLDevice_BenchmarkScore_Get = e.asm.Dj).apply(null, arguments);
    }, e._OpenCLDevice_IsEnabled_Get = function() {
      return (e._OpenCLDevice_IsEnabled_Get = e.asm.Ej).apply(null, arguments);
    }, e._OpenCLDevice_IsEnabled_Set = function() {
      return (e._OpenCLDevice_IsEnabled_Set = e.asm.Fj).apply(null, arguments);
    }, e._OpenCLDevice_Name_Get = function() {
      return (e._OpenCLDevice_Name_Get = e.asm.Gj).apply(null, arguments);
    }, e._OpenCLDevice_Version_Get = function() {
      return (e._OpenCLDevice_Version_Get = e.asm.Hj).apply(null, arguments);
    }, e._OpenCLDevice_GetKernelProfileRecords = function() {
      return (e._OpenCLDevice_GetKernelProfileRecords = e.asm.Ij).apply(null, arguments);
    }, e._OpenCLDevice_GetKernelProfileRecord = function() {
      return (e._OpenCLDevice_GetKernelProfileRecord = e.asm.Jj).apply(null, arguments);
    }, e._OpenCLDevice_SetProfileKernels = function() {
      return (e._OpenCLDevice_SetProfileKernels = e.asm.Kj).apply(null, arguments);
    }, e._OpenCLKernelProfileRecord_Count_Get = function() {
      return (e._OpenCLKernelProfileRecord_Count_Get = e.asm.Lj).apply(null, arguments);
    }, e._OpenCLKernelProfileRecord_Name_Get = function() {
      return (e._OpenCLKernelProfileRecord_Name_Get = e.asm.Mj).apply(null, arguments);
    }, e._OpenCLKernelProfileRecord_MaximumDuration_Get = function() {
      return (e._OpenCLKernelProfileRecord_MaximumDuration_Get = e.asm.Nj).apply(null, arguments);
    }, e._OpenCLKernelProfileRecord_MinimumDuration_Get = function() {
      return (e._OpenCLKernelProfileRecord_MinimumDuration_Get = e.asm.Oj).apply(null, arguments);
    }, e._OpenCLKernelProfileRecord_TotalDuration_Get = function() {
      return (e._OpenCLKernelProfileRecord_TotalDuration_Get = e.asm.Pj).apply(null, arguments);
    }, e._JpegOptimizer_CompressFile = function() {
      return (e._JpegOptimizer_CompressFile = e.asm.Qj).apply(null, arguments);
    }, e._JpegOptimizer_CompressStream = function() {
      return (e._JpegOptimizer_CompressStream = e.asm.Rj).apply(null, arguments);
    };
    var Et = e._malloc = function() {
      return (Et = e._malloc = e.asm.Sj).apply(null, arguments);
    }, ke = e._free = function() {
      return (ke = e._free = e.asm.Tj).apply(null, arguments);
    }, pt = function() {
      return (pt = e.asm.Uj).apply(null, arguments);
    };
    e._PixelCollection_Create = function() {
      return (e._PixelCollection_Create = e.asm.Vj).apply(null, arguments);
    }, e._PixelCollection_Dispose = function() {
      return (e._PixelCollection_Dispose = e.asm.Wj).apply(null, arguments);
    }, e._PixelCollection_GetArea = function() {
      return (e._PixelCollection_GetArea = e.asm.Xj).apply(null, arguments);
    }, e._PixelCollection_GetReadOnlyArea = function() {
      return (e._PixelCollection_GetReadOnlyArea = e.asm.Yj).apply(null, arguments);
    }, e._PixelCollection_SetArea = function() {
      return (e._PixelCollection_SetArea = e.asm.Zj).apply(null, arguments);
    }, e._PixelCollection_ToByteArray = function() {
      return (e._PixelCollection_ToByteArray = e.asm._j).apply(null, arguments);
    }, e._PixelCollection_ToShortArray = function() {
      return (e._PixelCollection_ToShortArray = e.asm.$j).apply(null, arguments);
    }, e._Quantum_Depth_Get = function() {
      return (e._Quantum_Depth_Get = e.asm.ak).apply(null, arguments);
    }, e._Quantum_Max_Get = function() {
      return (e._Quantum_Max_Get = e.asm.bk).apply(null, arguments);
    }, e._Quantum_ScaleToByte = function() {
      return (e._Quantum_ScaleToByte = e.asm.ck).apply(null, arguments);
    }, e._ResourceLimits_Area_Get = function() {
      return (e._ResourceLimits_Area_Get = e.asm.dk).apply(null, arguments);
    }, e._ResourceLimits_Area_Set = function() {
      return (e._ResourceLimits_Area_Set = e.asm.ek).apply(null, arguments);
    }, e._ResourceLimits_Disk_Get = function() {
      return (e._ResourceLimits_Disk_Get = e.asm.fk).apply(null, arguments);
    }, e._ResourceLimits_Disk_Set = function() {
      return (e._ResourceLimits_Disk_Set = e.asm.gk).apply(null, arguments);
    }, e._ResourceLimits_Height_Get = function() {
      return (e._ResourceLimits_Height_Get = e.asm.hk).apply(null, arguments);
    }, e._ResourceLimits_Height_Set = function() {
      return (e._ResourceLimits_Height_Set = e.asm.ik).apply(null, arguments);
    }, e._ResourceLimits_ListLength_Get = function() {
      return (e._ResourceLimits_ListLength_Get = e.asm.jk).apply(null, arguments);
    }, e._ResourceLimits_ListLength_Set = function() {
      return (e._ResourceLimits_ListLength_Set = e.asm.kk).apply(null, arguments);
    }, e._ResourceLimits_MaxMemoryRequest_Get = function() {
      return (e._ResourceLimits_MaxMemoryRequest_Get = e.asm.lk).apply(null, arguments);
    }, e._ResourceLimits_MaxMemoryRequest_Set = function() {
      return (e._ResourceLimits_MaxMemoryRequest_Set = e.asm.mk).apply(null, arguments);
    }, e._ResourceLimits_MaxProfileSize_Get = function() {
      return (e._ResourceLimits_MaxProfileSize_Get = e.asm.nk).apply(null, arguments);
    }, e._ResourceLimits_MaxProfileSize_Set = function() {
      return (e._ResourceLimits_MaxProfileSize_Set = e.asm.ok).apply(null, arguments);
    }, e._ResourceLimits_Memory_Get = function() {
      return (e._ResourceLimits_Memory_Get = e.asm.pk).apply(null, arguments);
    }, e._ResourceLimits_Memory_Set = function() {
      return (e._ResourceLimits_Memory_Set = e.asm.qk).apply(null, arguments);
    }, e._ResourceLimits_Thread_Get = function() {
      return (e._ResourceLimits_Thread_Get = e.asm.rk).apply(null, arguments);
    }, e._ResourceLimits_Thread_Set = function() {
      return (e._ResourceLimits_Thread_Set = e.asm.sk).apply(null, arguments);
    }, e._ResourceLimits_Throttle_Get = function() {
      return (e._ResourceLimits_Throttle_Get = e.asm.tk).apply(null, arguments);
    }, e._ResourceLimits_Throttle_Set = function() {
      return (e._ResourceLimits_Throttle_Set = e.asm.uk).apply(null, arguments);
    }, e._ResourceLimits_Time_Get = function() {
      return (e._ResourceLimits_Time_Get = e.asm.vk).apply(null, arguments);
    }, e._ResourceLimits_Time_Set = function() {
      return (e._ResourceLimits_Time_Set = e.asm.wk).apply(null, arguments);
    }, e._ResourceLimits_Width_Get = function() {
      return (e._ResourceLimits_Width_Get = e.asm.xk).apply(null, arguments);
    }, e._ResourceLimits_Width_Set = function() {
      return (e._ResourceLimits_Width_Set = e.asm.yk).apply(null, arguments);
    }, e._ResourceLimits_LimitMemory = function() {
      return (e._ResourceLimits_LimitMemory = e.asm.zk).apply(null, arguments);
    }, e._DrawingSettings_Create = function() {
      return (e._DrawingSettings_Create = e.asm.Ak).apply(null, arguments);
    }, e._DrawingSettings_Dispose = function() {
      return (e._DrawingSettings_Dispose = e.asm.Bk).apply(null, arguments);
    }, e._DrawingSettings_BorderColor_Get = function() {
      return (e._DrawingSettings_BorderColor_Get = e.asm.Ck).apply(null, arguments);
    }, e._DrawingSettings_BorderColor_Set = function() {
      return (e._DrawingSettings_BorderColor_Set = e.asm.Dk).apply(null, arguments);
    }, e._DrawingSettings_FillColor_Get = function() {
      return (e._DrawingSettings_FillColor_Get = e.asm.Ek).apply(null, arguments);
    }, e._DrawingSettings_FillColor_Set = function() {
      return (e._DrawingSettings_FillColor_Set = e.asm.Fk).apply(null, arguments);
    }, e._DrawingSettings_FillRule_Get = function() {
      return (e._DrawingSettings_FillRule_Get = e.asm.Gk).apply(null, arguments);
    }, e._DrawingSettings_FillRule_Set = function() {
      return (e._DrawingSettings_FillRule_Set = e.asm.Hk).apply(null, arguments);
    }, e._DrawingSettings_Font_Get = function() {
      return (e._DrawingSettings_Font_Get = e.asm.Ik).apply(null, arguments);
    }, e._DrawingSettings_Font_Set = function() {
      return (e._DrawingSettings_Font_Set = e.asm.Jk).apply(null, arguments);
    }, e._DrawingSettings_FontFamily_Get = function() {
      return (e._DrawingSettings_FontFamily_Get = e.asm.Kk).apply(null, arguments);
    }, e._DrawingSettings_FontFamily_Set = function() {
      return (e._DrawingSettings_FontFamily_Set = e.asm.Lk).apply(null, arguments);
    }, e._DrawingSettings_FontPointsize_Get = function() {
      return (e._DrawingSettings_FontPointsize_Get = e.asm.Mk).apply(null, arguments);
    }, e._DrawingSettings_FontPointsize_Set = function() {
      return (e._DrawingSettings_FontPointsize_Set = e.asm.Nk).apply(null, arguments);
    }, e._DrawingSettings_FontStyle_Get = function() {
      return (e._DrawingSettings_FontStyle_Get = e.asm.Ok).apply(null, arguments);
    }, e._DrawingSettings_FontStyle_Set = function() {
      return (e._DrawingSettings_FontStyle_Set = e.asm.Pk).apply(null, arguments);
    }, e._DrawingSettings_FontWeight_Get = function() {
      return (e._DrawingSettings_FontWeight_Get = e.asm.Qk).apply(null, arguments);
    }, e._DrawingSettings_FontWeight_Set = function() {
      return (e._DrawingSettings_FontWeight_Set = e.asm.Rk).apply(null, arguments);
    }, e._DrawingSettings_StrokeAntiAlias_Get = function() {
      return (e._DrawingSettings_StrokeAntiAlias_Get = e.asm.Sk).apply(null, arguments);
    }, e._DrawingSettings_StrokeAntiAlias_Set = function() {
      return (e._DrawingSettings_StrokeAntiAlias_Set = e.asm.Tk).apply(null, arguments);
    }, e._DrawingSettings_StrokeColor_Get = function() {
      return (e._DrawingSettings_StrokeColor_Get = e.asm.Uk).apply(null, arguments);
    }, e._DrawingSettings_StrokeColor_Set = function() {
      return (e._DrawingSettings_StrokeColor_Set = e.asm.Vk).apply(null, arguments);
    }, e._DrawingSettings_StrokeDashOffset_Get = function() {
      return (e._DrawingSettings_StrokeDashOffset_Get = e.asm.Wk).apply(null, arguments);
    }, e._DrawingSettings_StrokeDashOffset_Set = function() {
      return (e._DrawingSettings_StrokeDashOffset_Set = e.asm.Xk).apply(null, arguments);
    }, e._DrawingSettings_StrokeLineCap_Get = function() {
      return (e._DrawingSettings_StrokeLineCap_Get = e.asm.Yk).apply(null, arguments);
    }, e._DrawingSettings_StrokeLineCap_Set = function() {
      return (e._DrawingSettings_StrokeLineCap_Set = e.asm.Zk).apply(null, arguments);
    }, e._DrawingSettings_StrokeLineJoin_Get = function() {
      return (e._DrawingSettings_StrokeLineJoin_Get = e.asm._k).apply(null, arguments);
    }, e._DrawingSettings_StrokeLineJoin_Set = function() {
      return (e._DrawingSettings_StrokeLineJoin_Set = e.asm.$k).apply(null, arguments);
    }, e._DrawingSettings_StrokeMiterLimit_Get = function() {
      return (e._DrawingSettings_StrokeMiterLimit_Get = e.asm.al).apply(null, arguments);
    }, e._DrawingSettings_StrokeMiterLimit_Set = function() {
      return (e._DrawingSettings_StrokeMiterLimit_Set = e.asm.bl).apply(null, arguments);
    }, e._DrawingSettings_StrokeWidth_Get = function() {
      return (e._DrawingSettings_StrokeWidth_Get = e.asm.cl).apply(null, arguments);
    }, e._DrawingSettings_StrokeWidth_Set = function() {
      return (e._DrawingSettings_StrokeWidth_Set = e.asm.dl).apply(null, arguments);
    }, e._DrawingSettings_TextAntiAlias_Get = function() {
      return (e._DrawingSettings_TextAntiAlias_Get = e.asm.el).apply(null, arguments);
    }, e._DrawingSettings_TextAntiAlias_Set = function() {
      return (e._DrawingSettings_TextAntiAlias_Set = e.asm.fl).apply(null, arguments);
    }, e._DrawingSettings_TextDirection_Get = function() {
      return (e._DrawingSettings_TextDirection_Get = e.asm.gl).apply(null, arguments);
    }, e._DrawingSettings_TextDirection_Set = function() {
      return (e._DrawingSettings_TextDirection_Set = e.asm.hl).apply(null, arguments);
    }, e._DrawingSettings_TextEncoding_Get = function() {
      return (e._DrawingSettings_TextEncoding_Get = e.asm.il).apply(null, arguments);
    }, e._DrawingSettings_TextEncoding_Set = function() {
      return (e._DrawingSettings_TextEncoding_Set = e.asm.jl).apply(null, arguments);
    }, e._DrawingSettings_TextGravity_Get = function() {
      return (e._DrawingSettings_TextGravity_Get = e.asm.kl).apply(null, arguments);
    }, e._DrawingSettings_TextGravity_Set = function() {
      return (e._DrawingSettings_TextGravity_Set = e.asm.ll).apply(null, arguments);
    }, e._DrawingSettings_TextInterlineSpacing_Get = function() {
      return (e._DrawingSettings_TextInterlineSpacing_Get = e.asm.ml).apply(null, arguments);
    }, e._DrawingSettings_TextInterlineSpacing_Set = function() {
      return (e._DrawingSettings_TextInterlineSpacing_Set = e.asm.nl).apply(null, arguments);
    }, e._DrawingSettings_TextInterwordSpacing_Get = function() {
      return (e._DrawingSettings_TextInterwordSpacing_Get = e.asm.ol).apply(null, arguments);
    }, e._DrawingSettings_TextInterwordSpacing_Set = function() {
      return (e._DrawingSettings_TextInterwordSpacing_Set = e.asm.pl).apply(null, arguments);
    }, e._DrawingSettings_TextKerning_Get = function() {
      return (e._DrawingSettings_TextKerning_Get = e.asm.ql).apply(null, arguments);
    }, e._DrawingSettings_TextKerning_Set = function() {
      return (e._DrawingSettings_TextKerning_Set = e.asm.rl).apply(null, arguments);
    }, e._DrawingSettings_TextUnderColor_Get = function() {
      return (e._DrawingSettings_TextUnderColor_Get = e.asm.sl).apply(null, arguments);
    }, e._DrawingSettings_TextUnderColor_Set = function() {
      return (e._DrawingSettings_TextUnderColor_Set = e.asm.tl).apply(null, arguments);
    }, e._DrawingSettings_SetAffine = function() {
      return (e._DrawingSettings_SetAffine = e.asm.ul).apply(null, arguments);
    }, e._DrawingSettings_SetFillPattern = function() {
      return (e._DrawingSettings_SetFillPattern = e.asm.vl).apply(null, arguments);
    }, e._DrawingSettings_SetStrokeDashArray = function() {
      return (e._DrawingSettings_SetStrokeDashArray = e.asm.wl).apply(null, arguments);
    }, e._DrawingSettings_SetStrokePattern = function() {
      return (e._DrawingSettings_SetStrokePattern = e.asm.xl).apply(null, arguments);
    }, e._DrawingSettings_SetText = function() {
      return (e._DrawingSettings_SetText = e.asm.yl).apply(null, arguments);
    }, e._MagickSettings_Create = function() {
      return (e._MagickSettings_Create = e.asm.zl).apply(null, arguments);
    }, e._MagickSettings_Dispose = function() {
      return (e._MagickSettings_Dispose = e.asm.Al).apply(null, arguments);
    }, e._MagickSettings_AntiAlias_Get = function() {
      return (e._MagickSettings_AntiAlias_Get = e.asm.Bl).apply(null, arguments);
    }, e._MagickSettings_AntiAlias_Set = function() {
      return (e._MagickSettings_AntiAlias_Set = e.asm.Cl).apply(null, arguments);
    }, e._MagickSettings_BackgroundColor_Get = function() {
      return (e._MagickSettings_BackgroundColor_Get = e.asm.Dl).apply(null, arguments);
    }, e._MagickSettings_BackgroundColor_Set = function() {
      return (e._MagickSettings_BackgroundColor_Set = e.asm.El).apply(null, arguments);
    }, e._MagickSettings_ColorSpace_Get = function() {
      return (e._MagickSettings_ColorSpace_Get = e.asm.Fl).apply(null, arguments);
    }, e._MagickSettings_ColorSpace_Set = function() {
      return (e._MagickSettings_ColorSpace_Set = e.asm.Gl).apply(null, arguments);
    }, e._MagickSettings_ColorType_Get = function() {
      return (e._MagickSettings_ColorType_Get = e.asm.Hl).apply(null, arguments);
    }, e._MagickSettings_ColorType_Set = function() {
      return (e._MagickSettings_ColorType_Set = e.asm.Il).apply(null, arguments);
    }, e._MagickSettings_Compression_Get = function() {
      return (e._MagickSettings_Compression_Get = e.asm.Jl).apply(null, arguments);
    }, e._MagickSettings_Compression_Set = function() {
      return (e._MagickSettings_Compression_Set = e.asm.Kl).apply(null, arguments);
    }, e._MagickSettings_Debug_Get = function() {
      return (e._MagickSettings_Debug_Get = e.asm.Ll).apply(null, arguments);
    }, e._MagickSettings_Debug_Set = function() {
      return (e._MagickSettings_Debug_Set = e.asm.Ml).apply(null, arguments);
    }, e._MagickSettings_Density_Get = function() {
      return (e._MagickSettings_Density_Get = e.asm.Nl).apply(null, arguments);
    }, e._MagickSettings_Density_Set = function() {
      return (e._MagickSettings_Density_Set = e.asm.Ol).apply(null, arguments);
    }, e._MagickSettings_Depth_Get = function() {
      return (e._MagickSettings_Depth_Get = e.asm.Pl).apply(null, arguments);
    }, e._MagickSettings_Depth_Set = function() {
      return (e._MagickSettings_Depth_Set = e.asm.Ql).apply(null, arguments);
    }, e._MagickSettings_Endian_Get = function() {
      return (e._MagickSettings_Endian_Get = e.asm.Rl).apply(null, arguments);
    }, e._MagickSettings_Endian_Set = function() {
      return (e._MagickSettings_Endian_Set = e.asm.Sl).apply(null, arguments);
    }, e._MagickSettings_Extract_Get = function() {
      return (e._MagickSettings_Extract_Get = e.asm.Tl).apply(null, arguments);
    }, e._MagickSettings_Extract_Set = function() {
      return (e._MagickSettings_Extract_Set = e.asm.Ul).apply(null, arguments);
    }, e._MagickSettings_Format_Get = function() {
      return (e._MagickSettings_Format_Get = e.asm.Vl).apply(null, arguments);
    }, e._MagickSettings_Format_Set = function() {
      return (e._MagickSettings_Format_Set = e.asm.Wl).apply(null, arguments);
    }, e._MagickSettings_FontPointsize_Get = function() {
      return (e._MagickSettings_FontPointsize_Get = e.asm.Xl).apply(null, arguments);
    }, e._MagickSettings_FontPointsize_Set = function() {
      return (e._MagickSettings_FontPointsize_Set = e.asm.Yl).apply(null, arguments);
    }, e._MagickSettings_Interlace_Get = function() {
      return (e._MagickSettings_Interlace_Get = e.asm.Zl).apply(null, arguments);
    }, e._MagickSettings_Interlace_Set = function() {
      return (e._MagickSettings_Interlace_Set = e.asm._l).apply(null, arguments);
    }, e._MagickSettings_Monochrome_Get = function() {
      return (e._MagickSettings_Monochrome_Get = e.asm.$l).apply(null, arguments);
    }, e._MagickSettings_Monochrome_Set = function() {
      return (e._MagickSettings_Monochrome_Set = e.asm.am).apply(null, arguments);
    }, e._MagickSettings_Verbose_Get = function() {
      return (e._MagickSettings_Verbose_Get = e.asm.bm).apply(null, arguments);
    }, e._MagickSettings_Verbose_Set = function() {
      return (e._MagickSettings_Verbose_Set = e.asm.cm).apply(null, arguments);
    }, e._MagickSettings_SetColorFuzz = function() {
      return (e._MagickSettings_SetColorFuzz = e.asm.dm).apply(null, arguments);
    }, e._MagickSettings_SetFileName = function() {
      return (e._MagickSettings_SetFileName = e.asm.em).apply(null, arguments);
    }, e._MagickSettings_SetFont = function() {
      return (e._MagickSettings_SetFont = e.asm.fm).apply(null, arguments);
    }, e._MagickSettings_SetNumberScenes = function() {
      return (e._MagickSettings_SetNumberScenes = e.asm.gm).apply(null, arguments);
    }, e._MagickSettings_SetOption = function() {
      return (e._MagickSettings_SetOption = e.asm.hm).apply(null, arguments);
    }, e._MagickSettings_SetPage = function() {
      return (e._MagickSettings_SetPage = e.asm.im).apply(null, arguments);
    }, e._MagickSettings_SetPing = function() {
      return (e._MagickSettings_SetPing = e.asm.jm).apply(null, arguments);
    }, e._MagickSettings_SetQuality = function() {
      return (e._MagickSettings_SetQuality = e.asm.km).apply(null, arguments);
    }, e._MagickSettings_SetScenes = function() {
      return (e._MagickSettings_SetScenes = e.asm.lm).apply(null, arguments);
    }, e._MagickSettings_SetScene = function() {
      return (e._MagickSettings_SetScene = e.asm.mm).apply(null, arguments);
    }, e._MagickSettings_SetSize = function() {
      return (e._MagickSettings_SetSize = e.asm.nm).apply(null, arguments);
    }, e._MontageSettings_Create = function() {
      return (e._MontageSettings_Create = e.asm.om).apply(null, arguments);
    }, e._MontageSettings_Dispose = function() {
      return (e._MontageSettings_Dispose = e.asm.pm).apply(null, arguments);
    }, e._MontageSettings_SetBackgroundColor = function() {
      return (e._MontageSettings_SetBackgroundColor = e.asm.qm).apply(null, arguments);
    }, e._MontageSettings_SetBorderColor = function() {
      return (e._MontageSettings_SetBorderColor = e.asm.rm).apply(null, arguments);
    }, e._MontageSettings_SetBorderWidth = function() {
      return (e._MontageSettings_SetBorderWidth = e.asm.sm).apply(null, arguments);
    }, e._MontageSettings_SetFillColor = function() {
      return (e._MontageSettings_SetFillColor = e.asm.tm).apply(null, arguments);
    }, e._MontageSettings_SetFont = function() {
      return (e._MontageSettings_SetFont = e.asm.um).apply(null, arguments);
    }, e._MontageSettings_SetFontPointsize = function() {
      return (e._MontageSettings_SetFontPointsize = e.asm.vm).apply(null, arguments);
    }, e._MontageSettings_SetFrameGeometry = function() {
      return (e._MontageSettings_SetFrameGeometry = e.asm.wm).apply(null, arguments);
    }, e._MontageSettings_SetGeometry = function() {
      return (e._MontageSettings_SetGeometry = e.asm.xm).apply(null, arguments);
    }, e._MontageSettings_SetGravity = function() {
      return (e._MontageSettings_SetGravity = e.asm.ym).apply(null, arguments);
    }, e._MontageSettings_SetShadow = function() {
      return (e._MontageSettings_SetShadow = e.asm.zm).apply(null, arguments);
    }, e._MontageSettings_SetStrokeColor = function() {
      return (e._MontageSettings_SetStrokeColor = e.asm.Am).apply(null, arguments);
    }, e._MontageSettings_SetTextureFileName = function() {
      return (e._MontageSettings_SetTextureFileName = e.asm.Bm).apply(null, arguments);
    }, e._MontageSettings_SetTileGeometry = function() {
      return (e._MontageSettings_SetTileGeometry = e.asm.Cm).apply(null, arguments);
    }, e._MontageSettings_SetTitle = function() {
      return (e._MontageSettings_SetTitle = e.asm.Dm).apply(null, arguments);
    }, e._QuantizeSettings_SetColors = function() {
      return (e._QuantizeSettings_SetColors = e.asm.Em).apply(null, arguments);
    }, e._QuantizeSettings_SetColorSpace = function() {
      return (e._QuantizeSettings_SetColorSpace = e.asm.Fm).apply(null, arguments);
    }, e._QuantizeSettings_SetDitherMethod = function() {
      return (e._QuantizeSettings_SetDitherMethod = e.asm.Gm).apply(null, arguments);
    }, e._QuantizeSettings_SetMeasureErrors = function() {
      return (e._QuantizeSettings_SetMeasureErrors = e.asm.Hm).apply(null, arguments);
    }, e._QuantizeSettings_SetTreeDepth = function() {
      return (e._QuantizeSettings_SetTreeDepth = e.asm.Im).apply(null, arguments);
    }, e._ChannelMoments_Centroid_Get = function() {
      return (e._ChannelMoments_Centroid_Get = e.asm.Jm).apply(null, arguments);
    }, e._ChannelMoments_EllipseAngle_Get = function() {
      return (e._ChannelMoments_EllipseAngle_Get = e.asm.Km).apply(null, arguments);
    }, e._ChannelMoments_EllipseAxis_Get = function() {
      return (e._ChannelMoments_EllipseAxis_Get = e.asm.Lm).apply(null, arguments);
    }, e._ChannelMoments_EllipseEccentricity_Get = function() {
      return (e._ChannelMoments_EllipseEccentricity_Get = e.asm.Mm).apply(null, arguments);
    }, e._ChannelMoments_EllipseIntensity_Get = function() {
      return (e._ChannelMoments_EllipseIntensity_Get = e.asm.Nm).apply(null, arguments);
    }, e._ChannelMoments_GetHuInvariants = function() {
      return (e._ChannelMoments_GetHuInvariants = e.asm.Om).apply(null, arguments);
    }, e._ChannelPerceptualHash_GetHuPhash = function() {
      return (e._ChannelPerceptualHash_GetHuPhash = e.asm.Pm).apply(null, arguments);
    }, e._ChannelStatistics_Depth_Get = function() {
      return (e._ChannelStatistics_Depth_Get = e.asm.Qm).apply(null, arguments);
    }, e._ChannelStatistics_Entropy_Get = function() {
      return (e._ChannelStatistics_Entropy_Get = e.asm.Rm).apply(null, arguments);
    }, e._ChannelStatistics_Kurtosis_Get = function() {
      return (e._ChannelStatistics_Kurtosis_Get = e.asm.Sm).apply(null, arguments);
    }, e._ChannelStatistics_Maximum_Get = function() {
      return (e._ChannelStatistics_Maximum_Get = e.asm.Tm).apply(null, arguments);
    }, e._ChannelStatistics_Mean_Get = function() {
      return (e._ChannelStatistics_Mean_Get = e.asm.Um).apply(null, arguments);
    }, e._ChannelStatistics_Minimum_Get = function() {
      return (e._ChannelStatistics_Minimum_Get = e.asm.Vm).apply(null, arguments);
    }, e._ChannelStatistics_Skewness_Get = function() {
      return (e._ChannelStatistics_Skewness_Get = e.asm.Wm).apply(null, arguments);
    }, e._ChannelStatistics_StandardDeviation_Get = function() {
      return (e._ChannelStatistics_StandardDeviation_Get = e.asm.Xm).apply(null, arguments);
    }, e._Moments_DisposeList = function() {
      return (e._Moments_DisposeList = e.asm.Ym).apply(null, arguments);
    }, e._Moments_GetInstance = function() {
      return (e._Moments_GetInstance = e.asm.Zm).apply(null, arguments);
    }, e._PerceptualHash_DisposeList = function() {
      return (e._PerceptualHash_DisposeList = e.asm._m).apply(null, arguments);
    }, e._PerceptualHash_GetInstance = function() {
      return (e._PerceptualHash_GetInstance = e.asm.$m).apply(null, arguments);
    }, e._Statistics_DisposeList = function() {
      return (e._Statistics_DisposeList = e.asm.an).apply(null, arguments);
    }, e._Statistics_GetInstance = function() {
      return (e._Statistics_GetInstance = e.asm.bn).apply(null, arguments);
    }, e._ConnectedComponent_DisposeList = function() {
      return (e._ConnectedComponent_DisposeList = e.asm.cn).apply(null, arguments);
    }, e._ConnectedComponent_GetArea = function() {
      return (e._ConnectedComponent_GetArea = e.asm.dn).apply(null, arguments);
    }, e._ConnectedComponent_GetCentroid = function() {
      return (e._ConnectedComponent_GetCentroid = e.asm.en).apply(null, arguments);
    }, e._ConnectedComponent_GetColor = function() {
      return (e._ConnectedComponent_GetColor = e.asm.fn).apply(null, arguments);
    }, e._ConnectedComponent_GetHeight = function() {
      return (e._ConnectedComponent_GetHeight = e.asm.gn).apply(null, arguments);
    }, e._ConnectedComponent_GetId = function() {
      return (e._ConnectedComponent_GetId = e.asm.hn).apply(null, arguments);
    }, e._ConnectedComponent_GetWidth = function() {
      return (e._ConnectedComponent_GetWidth = e.asm.jn).apply(null, arguments);
    }, e._ConnectedComponent_GetX = function() {
      return (e._ConnectedComponent_GetX = e.asm.kn).apply(null, arguments);
    }, e._ConnectedComponent_GetY = function() {
      return (e._ConnectedComponent_GetY = e.asm.ln).apply(null, arguments);
    }, e._ConnectedComponent_GetInstance = function() {
      return (e._ConnectedComponent_GetInstance = e.asm.mn).apply(null, arguments);
    }, e._MagickGeometry_Create = function() {
      return (e._MagickGeometry_Create = e.asm.nn).apply(null, arguments);
    }, e._MagickGeometry_Dispose = function() {
      return (e._MagickGeometry_Dispose = e.asm.on).apply(null, arguments);
    }, e._MagickGeometry_X_Get = function() {
      return (e._MagickGeometry_X_Get = e.asm.pn).apply(null, arguments);
    };
    var sr = function() {
      return (sr = e.asm.qn).apply(null, arguments);
    };
    e._MagickGeometry_Y_Get = function() {
      return (e._MagickGeometry_Y_Get = e.asm.rn).apply(null, arguments);
    }, e._MagickGeometry_Width_Get = function() {
      return (e._MagickGeometry_Width_Get = e.asm.sn).apply(null, arguments);
    }, e._MagickGeometry_Height_Get = function() {
      return (e._MagickGeometry_Height_Get = e.asm.tn).apply(null, arguments);
    }, e._MagickGeometry_Initialize = function() {
      return (e._MagickGeometry_Initialize = e.asm.un).apply(null, arguments);
    }, e._MagickRectangle_Dispose = function() {
      return (e._MagickRectangle_Dispose = e.asm.vn).apply(null, arguments);
    }, e._MagickRectangle_X_Get = function() {
      return (e._MagickRectangle_X_Get = e.asm.wn).apply(null, arguments);
    }, e._MagickRectangle_X_Set = function() {
      return (e._MagickRectangle_X_Set = e.asm.xn).apply(null, arguments);
    }, e._MagickRectangle_Y_Get = function() {
      return (e._MagickRectangle_Y_Get = e.asm.yn).apply(null, arguments);
    }, e._MagickRectangle_Y_Set = function() {
      return (e._MagickRectangle_Y_Set = e.asm.zn).apply(null, arguments);
    }, e._MagickRectangle_Width_Get = function() {
      return (e._MagickRectangle_Width_Get = e.asm.An).apply(null, arguments);
    }, e._MagickRectangle_Width_Set = function() {
      return (e._MagickRectangle_Width_Set = e.asm.Bn).apply(null, arguments);
    }, e._MagickRectangle_Height_Get = function() {
      return (e._MagickRectangle_Height_Get = e.asm.Cn).apply(null, arguments);
    }, e._MagickRectangle_Height_Set = function() {
      return (e._MagickRectangle_Height_Set = e.asm.Dn).apply(null, arguments);
    }, e._MagickRectangle_FromPageSize = function() {
      return (e._MagickRectangle_FromPageSize = e.asm.En).apply(null, arguments);
    }, e._OffsetInfo_Create = function() {
      return (e._OffsetInfo_Create = e.asm.Fn).apply(null, arguments);
    }, e._OffsetInfo_Dispose = function() {
      return (e._OffsetInfo_Dispose = e.asm.Gn).apply(null, arguments);
    }, e._OffsetInfo_SetX = function() {
      return (e._OffsetInfo_SetX = e.asm.Hn).apply(null, arguments);
    }, e._OffsetInfo_SetY = function() {
      return (e._OffsetInfo_SetY = e.asm.In).apply(null, arguments);
    }, e._PointInfo_X_Get = function() {
      return (e._PointInfo_X_Get = e.asm.Jn).apply(null, arguments);
    }, e._PointInfo_Y_Get = function() {
      return (e._PointInfo_Y_Get = e.asm.Kn).apply(null, arguments);
    }, e._PointInfoCollection_Create = function() {
      return (e._PointInfoCollection_Create = e.asm.Ln).apply(null, arguments);
    }, e._PointInfoCollection_Dispose = function() {
      return (e._PointInfoCollection_Dispose = e.asm.Mn).apply(null, arguments);
    }, e._PointInfoCollection_GetX = function() {
      return (e._PointInfoCollection_GetX = e.asm.Nn).apply(null, arguments);
    }, e._PointInfoCollection_GetY = function() {
      return (e._PointInfoCollection_GetY = e.asm.On).apply(null, arguments);
    }, e._PointInfoCollection_Set = function() {
      return (e._PointInfoCollection_Set = e.asm.Pn).apply(null, arguments);
    }, e._PrimaryInfo_Dispose = function() {
      return (e._PrimaryInfo_Dispose = e.asm.Qn).apply(null, arguments);
    }, e._PrimaryInfo_X_Get = function() {
      return (e._PrimaryInfo_X_Get = e.asm.Rn).apply(null, arguments);
    }, e._PrimaryInfo_X_Set = function() {
      return (e._PrimaryInfo_X_Set = e.asm.Sn).apply(null, arguments);
    }, e._PrimaryInfo_Y_Get = function() {
      return (e._PrimaryInfo_Y_Get = e.asm.Tn).apply(null, arguments);
    }, e._PrimaryInfo_Y_Set = function() {
      return (e._PrimaryInfo_Y_Set = e.asm.Un).apply(null, arguments);
    }, e._PrimaryInfo_Z_Get = function() {
      return (e._PrimaryInfo_Z_Get = e.asm.Vn).apply(null, arguments);
    }, e._PrimaryInfo_Z_Set = function() {
      return (e._PrimaryInfo_Z_Set = e.asm.Wn).apply(null, arguments);
    }, e._StringInfo_Length_Get = function() {
      return (e._StringInfo_Length_Get = e.asm.Xn).apply(null, arguments);
    }, e._StringInfo_Datum_Get = function() {
      return (e._StringInfo_Datum_Get = e.asm.Yn).apply(null, arguments);
    }, e._TypeMetric_Dispose = function() {
      return (e._TypeMetric_Dispose = e.asm.Zn).apply(null, arguments);
    }, e._TypeMetric_Ascent_Get = function() {
      return (e._TypeMetric_Ascent_Get = e.asm._n).apply(null, arguments);
    }, e._TypeMetric_Descent_Get = function() {
      return (e._TypeMetric_Descent_Get = e.asm.$n).apply(null, arguments);
    }, e._TypeMetric_MaxHorizontalAdvance_Get = function() {
      return (e._TypeMetric_MaxHorizontalAdvance_Get = e.asm.ao).apply(null, arguments);
    }, e._TypeMetric_TextHeight_Get = function() {
      return (e._TypeMetric_TextHeight_Get = e.asm.bo).apply(null, arguments);
    }, e._TypeMetric_TextWidth_Get = function() {
      return (e._TypeMetric_TextWidth_Get = e.asm.co).apply(null, arguments);
    }, e._TypeMetric_UnderlinePosition_Get = function() {
      return (e._TypeMetric_UnderlinePosition_Get = e.asm.eo).apply(null, arguments);
    }, e._TypeMetric_UnderlineThickness_Get = function() {
      return (e._TypeMetric_UnderlineThickness_Get = e.asm.fo).apply(null, arguments);
    };
    var ur = function() {
      return (ur = e.asm.go).apply(null, arguments);
    };
    e.__embind_initialize_bindings = function() {
      return (e.__embind_initialize_bindings = e.asm.ho).apply(null, arguments);
    };
    var or = function() {
      return (or = e.asm.io).apply(null, arguments);
    }, N = function() {
      return (N = e.asm.jo).apply(null, arguments);
    }, H = function() {
      return (H = e.asm.ko).apply(null, arguments);
    }, U = function() {
      return (U = e.asm.lo).apply(null, arguments);
    }, _r = function() {
      return (_r = e.asm.mo).apply(null, arguments);
    }, lr = function() {
      return (lr = e.asm.no).apply(null, arguments);
    };
    function Cs(r, a, i, s) {
      var o = H();
      try {
        x(r)(a, i, s);
      } catch (g) {
        if (U(o), g !== g + 0) throw g;
        N(1, 0);
      }
    }
    function As(r, a, i, s) {
      var o = H();
      try {
        return x(r)(a, i, s);
      } catch (g) {
        if (U(o), g !== g + 0) throw g;
        N(1, 0);
      }
    }
    function Rs(r, a, i) {
      var s = H();
      try {
        return x(r)(a, i);
      } catch (o) {
        if (U(s), o !== o + 0) throw o;
        N(1, 0);
      }
    }
    function Es(r, a) {
      var i = H();
      try {
        return x(r)(a);
      } catch (s) {
        if (U(i), s !== s + 0) throw s;
        N(1, 0);
      }
    }
    function Ts(r, a) {
      var i = H();
      try {
        x(r)(a);
      } catch (s) {
        if (U(i), s !== s + 0) throw s;
        N(1, 0);
      }
    }
    function Ws(r, a, i) {
      var s = H();
      try {
        x(r)(a, i);
      } catch (o) {
        if (U(s), o !== o + 0) throw o;
        N(1, 0);
      }
    }
    function Ls(r, a, i, s, o) {
      var g = H();
      try {
        x(r)(a, i, s, o);
      } catch (m) {
        if (U(g), m !== m + 0) throw m;
        N(1, 0);
      }
    }
    function Bs(r, a, i, s, o) {
      var g = H();
      try {
        return x(r)(a, i, s, o);
      } catch (m) {
        if (U(g), m !== m + 0) throw m;
        N(1, 0);
      }
    }
    function xs(r, a, i, s) {
      var o = H();
      try {
        return x(r)(a, i, s);
      } catch (g) {
        if (U(o), g !== g + 0) throw g;
        return N(1, 0), 0n;
      }
    }
    function zs(r, a) {
      var i = H();
      try {
        return x(r)(a);
      } catch (s) {
        if (U(i), s !== s + 0) throw s;
        return N(1, 0), 0n;
      }
    }
    function Ns(r, a, i, s, o, g, m, f, d) {
      var y = H();
      try {
        return x(r)(a, i, s, o, g, m, f, d);
      } catch (k) {
        if (U(y), k !== k + 0) throw k;
        N(1, 0);
      }
    }
    function Hs(r) {
      var a = H();
      try {
        return x(r)();
      } catch (i) {
        if (U(a), i !== i + 0) throw i;
        N(1, 0);
      }
    }
    function Us(r, a, i, s, o, g, m) {
      var f = H();
      try {
        return x(r)(a, i, s, o, g, m);
      } catch (d) {
        if (U(f), d !== d + 0) throw d;
        N(1, 0);
      }
    }
    function Fs(r, a, i, s, o) {
      var g = H();
      try {
        return x(r)(a, i, s, o);
      } catch (m) {
        if (U(g), m !== m + 0) throw m;
        N(1, 0);
      }
    }
    function $s(r, a, i) {
      var s = H();
      try {
        return x(r)(a, i);
      } catch (o) {
        if (U(s), o !== o + 0) throw o;
        N(1, 0);
      }
    }
    function Ys(r, a, i) {
      var s = H();
      try {
        x(r)(a, i);
      } catch (o) {
        if (U(s), o !== o + 0) throw o;
        N(1, 0);
      }
    }
    function js(r, a, i, s, o, g) {
      var m = H();
      try {
        return x(r)(a, i, s, o, g);
      } catch (f) {
        if (U(m), f !== f + 0) throw f;
        N(1, 0);
      }
    }
    function Xs(r, a, i) {
      var s = H();
      try {
        return x(r)(a, i);
      } catch (o) {
        if (U(s), o !== o + 0) throw o;
        N(1, 0);
      }
    }
    function Vs(r) {
      var a = H();
      try {
        x(r)();
      } catch (i) {
        if (U(a), i !== i + 0) throw i;
        N(1, 0);
      }
    }
    function qs(r, a, i, s, o, g) {
      var m = H();
      try {
        x(r)(a, i, s, o, g);
      } catch (f) {
        if (U(m), f !== f + 0) throw f;
        N(1, 0);
      }
    }
    function Qs(r, a, i, s, o, g, m, f) {
      var d = H();
      try {
        return x(r)(a, i, s, o, g, m, f);
      } catch (y) {
        if (U(d), y !== y + 0) throw y;
        N(1, 0);
      }
    }
    function Js(r, a, i, s, o, g, m, f, d, y) {
      var k = H();
      try {
        return x(r)(a, i, s, o, g, m, f, d, y);
      } catch (D) {
        if (U(k), D !== D + 0) throw D;
        N(1, 0);
      }
    }
    function Ks(r, a, i, s) {
      var o = H();
      try {
        x(r)(a, i, s);
      } catch (g) {
        if (U(o), g !== g + 0) throw g;
        N(1, 0);
      }
    }
    function Zs(r, a, i, s, o, g, m, f, d, y, k) {
      var D = H();
      try {
        x(r)(a, i, s, o, g, m, f, d, y, k);
      } catch (I) {
        if (U(D), I !== I + 0) throw I;
        N(1, 0);
      }
    }
    function Os(r, a, i, s, o, g, m, f, d, y) {
      var k = H();
      try {
        x(r)(a, i, s, o, g, m, f, d, y);
      } catch (D) {
        if (U(k), D !== D + 0) throw D;
        N(1, 0);
      }
    }
    function eu(r, a, i, s, o, g, m) {
      var f = H();
      try {
        x(r)(a, i, s, o, g, m);
      } catch (d) {
        if (U(f), d !== d + 0) throw d;
        N(1, 0);
      }
    }
    function tu(r, a, i, s, o, g, m, f) {
      var d = H();
      try {
        x(r)(a, i, s, o, g, m, f);
      } catch (y) {
        if (U(d), y !== y + 0) throw y;
        N(1, 0);
      }
    }
    function nu(r, a, i, s, o, g, m, f, d, y, k, D) {
      var I = H();
      try {
        return x(r)(a, i, s, o, g, m, f, d, y, k, D);
      } catch (M) {
        if (U(I), M !== M + 0) throw M;
        N(1, 0);
      }
    }
    function ru(r, a, i, s, o, g) {
      var m = H();
      try {
        return x(r)(a, i, s, o, g);
      } catch (f) {
        if (U(m), f !== f + 0) throw f;
        N(1, 0);
      }
    }
    function au(r, a, i, s, o, g, m, f, d) {
      var y = H();
      try {
        x(r)(a, i, s, o, g, m, f, d);
      } catch (k) {
        if (U(y), k !== k + 0) throw k;
        N(1, 0);
      }
    }
    function iu(r, a, i, s, o, g, m, f, d, y, k, D) {
      var I = H();
      try {
        x(r)(a, i, s, o, g, m, f, d, y, k, D);
      } catch (M) {
        if (U(I), M !== M + 0) throw M;
        N(1, 0);
      }
    }
    e.addFunction = Gs, e.setValue = jr, e.getValue = Yr, e.UTF8ToString = at, e.stringToUTF8 = qe, e.lengthBytesUTF8 = xe, e.FS = l;
    var Tt;
    nt = function r() {
      Tt || cr(), Tt || (nt = r);
    };
    function cr() {
      if (Be > 0 || (Tr(), Be > 0))
        return;
      function r() {
        Tt || (Tt = !0, e.calledRun = !0, !Ht && (Wr(), u(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), Lr()));
      }
      e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          e.setStatus("");
        }, 1), r();
      }, 1)) : r();
    }
    if (e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0; )
        e.preInit.pop()();
    return cr(), n.ready;
  };
})();
class Mu {
  constructor(n) {
    if (n instanceof URL) {
      if (n.protocol !== "http:" && n.protocol !== "https:")
        throw new Error("Only http/https protocol is supported");
      this.locateFile = () => n.href;
    } else n instanceof WebAssembly.Module ? this.instantiateWasm = (e, u) => {
      const c = new WebAssembly.Instance(n, e);
      u(c);
    } : this.wasmBinary = n;
  }
  wasmBinary;
  instantiateWasm;
  locateFile;
}
class _ {
  loader;
  api;
  /** @internal */
  constructor() {
    this.loader = (n, e) => new Promise((u, c) => {
      if (this.api !== void 0) {
        u();
        return;
      }
      const p = new Mu(n);
      Iu(p).then((h) => {
        try {
          this.writeConfigurationFiles(h, e), rn(h, "MAGICK_CONFIGURE_PATH", (S) => {
            rn(h, "/xml", (b) => {
              h._Environment_SetEnv(S, b), this.api = h, u();
            });
          });
        } catch (S) {
          c(S);
        }
      });
    });
  }
  /** @internal */
  async _initialize(n, e) {
    await this.loader(n, e);
  }
  /** @internal */
  static get _api() {
    if (!Bt.api)
      throw new K("`await initializeImageMagick` should be called to initialize the library");
    return Bt.api;
  }
  /** @internal */
  static set _api(n) {
    Bt.api = n;
  }
  static read(n, e, u, c) {
    return re._create((p) => {
      let h = c;
      if (typeof n != "string" && !dr(n))
        typeof e == "number" && typeof u == "number" && p.read(n, e, u);
      else if (typeof e != "number" && typeof u != "number") {
        h = u;
        let S;
        e instanceof De ? S = e : typeof e == "string" ? (S = new De(), S.format = e) : h = e, p.read(n, S);
      }
      return h(p);
    });
  }
  static readCollection(n, e, u) {
    return Me.create()._use((p) => {
      let h = u, S;
      return e instanceof De ? S = e : typeof e == "string" ? (S = new De(), S.format = e) : h = e, p.read(n, S), h(p);
    });
  }
  static readFromCanvas(n, e, u) {
    return re._create((c) => (c.readFromCanvas(n, u), e(c)));
  }
  writeConfigurationFiles(n, e) {
    n.FS.analyzePath("/xml").exists || n.FS.mkdir("/xml");
    for (const c of e.all()) {
      const p = n.FS.open(`/xml/${c.fileName}`, "w"), h = new TextEncoder().encode(c.data);
      n.FS.write(p, h, 0, h.length), n.FS.close(p);
    }
  }
}
const Bt = new _();
async function go(t, n) {
  await Bt._initialize(t, n ?? sn.default);
}
class Du {
  /** @internal */
  constructor(n, e, u) {
    this.origin = n, this.progress = new se((e + 1) / (u * 100));
  }
  /**
   * Gets the originator of this event.
   */
  origin;
  /**
   * Gets the progress percentage.
   */
  progress;
  /**
   * Gets or sets a value indicating whether the current operation will be canceled.
   */
  cancel = !1;
}
class ie {
  static _logDelegate = 0;
  static _onLog;
  static _progressDelegate = 0;
  static _images = {};
  static setLogDelegate(n) {
    ie._logDelegate === 0 && n !== void 0 && (ie._logDelegate = _._api.addFunction(ie.logDelegate, "vii")), _._api._Magick_SetLogDelegate(n === void 0 ? 0 : ie._logDelegate), ie._onLog = n;
  }
  static setProgressDelegate(n) {
    ie._progressDelegate === 0 && (this._progressDelegate = _._api.addFunction(ie.progressDelegate, "iijji")), this._images[n._instance] = n, _._api._MagickImage_SetClientData(n._instance, n._instance), _._api._MagickImage_SetProgressDelegate(n._instance, ie._progressDelegate);
  }
  static removeProgressDelegate(n) {
    _._api._MagickImage_SetClientData(n._instance, 0), _._api._MagickImage_SetProgressDelegate(n._instance, 0), delete ie._images[n._instance];
  }
  static logDelegate(n, e) {
    if (ie._onLog === void 0)
      return;
    const u = me(e);
    ie._onLog(new lu(n, u));
  }
  static progressDelegate(n, e, u, c) {
    const p = ie._images[c];
    if (p === void 0 || p.onProgress === void 0)
      return 1;
    const h = Number(e), S = Number(u), b = me(n), T = new Du(b, h, S);
    return p.onProgress(T), T.cancel ? 0 : 1;
  }
}
class Te {
  static _allFormats;
  constructor(n, e, u, c, p) {
    this.format = n, this.description = e, this.supportsMultipleFrames = u, this.supportsReading = c, this.supportsWriting = p;
  }
  description;
  format;
  supportsMultipleFrames;
  supportsReading;
  supportsWriting;
  static get all() {
    return Te._allFormats === void 0 && (Te._allFormats = Te.loadFormats()), Te._allFormats;
  }
  static loadFormats() {
    return A.usePointer((n) => Ge.use((e) => {
      const u = _._api._MagickFormatInfo_CreateList(e.ptr, n), c = e.value;
      try {
        const p = new Array(c), h = Object.values(Pe);
        for (let S = 0; S < c; S++) {
          const b = _._api._MagickFormatInfo_GetInfo(u, S, n), T = me(_._api._MagickFormatInfo_Format_Get(b)), B = Te.convertFormat(T, h), ae = me(_._api._MagickFormatInfo_Description_Get(b), ""), he = _._api._MagickFormatInfo_SupportsMultipleFrames_Get(b) == 1, Ce = _._api._MagickFormatInfo_SupportsReading_Get(b) == 1, We = _._api._MagickFormatInfo_SupportsWriting_Get(b) == 1;
          p[S] = new Te(B, ae, he, Ce, We);
        }
        return p;
      } finally {
        _._api._MagickFormatInfo_DisposeList(u, c);
      }
    }));
  }
  static convertFormat(n, e) {
    return n === null ? Pe.Unknown : e.includes(n) ? n : Pe.Unknown;
  }
}
var Q = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.Accelerate = 1] = "Accelerate", t[t.Annotate = 2] = "Annotate", t[t.Blob = 4] = "Blob", t[t.Cache = 8] = "Cache", t[t.Coder = 16] = "Coder", t[t.Configure = 32] = "Configure", t[t.Deprecate = 64] = "Deprecate", t[t.Draw = 128] = "Draw", t[t.Exception = 256] = "Exception", t[t.Image = 512] = "Image", t[t.Locale = 1024] = "Locale", t[t.Module = 2048] = "Module", t[t.Pixel = 4096] = "Pixel", t[t.Policy = 8192] = "Policy", t[t.Resource = 16384] = "Resource", t[t.Trace = 32768] = "Trace", t[t.Transform = 65536] = "Transform", t[t.User = 131072] = "User", t[t.Wand = 262144] = "Wand", t[t.Detailed = 2147450879] = "Detailed", t[t.All = 2147483647] = "All", t))(Q || {});
class be {
  /**
   * Gets the ImageMagick delegate libraries.
   */
  static get delegates() {
    return me(_._api._Magick_Delegates_Get());
  }
  /**
   * Gets the ImageMagick features.
   */
  static get features() {
    return me(_._api._Magick_Features_Get()).slice(0, -1);
  }
  /**
   * Gets the ImageMagick version.
   */
  static get imageMagickVersion() {
    return me(_._api._Magick_ImageMagickVersion_Get());
  }
  /**
   * Gets information about the supported formats.
   */
  static get supportedFormats() {
    return Te.all;
  }
  /**
   * Function that will be executed when something is logged by ImageMagick.
   */
  static onLog;
  /**
   * Registers a font.
   * @param name The name of the font.
   * @param data The byte array containing the font.
   */
  static addFont(n, e) {
    const u = _._api.FS;
    u.analyzePath("/fonts").exists || u.mkdir("/fonts");
    const p = u.open(`/fonts/${n}`, "w");
    u.write(p, e, 0, e.length), u.close(p);
  }
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static resetRandomSeed = () => _._api._Magick_ResetRandomSeed();
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static setRandomSeed = (n) => _._api._Magick_SetRandomSeed(n);
  /**
   * Set the events that will be written to the log. The log will be written to the Log event
   * and the debug window in VisualStudio. To change the log settings you must use a custom
   * log.xml file.
   * @param eventTypes The events that should be logged.
   */
  static setLogEvents(n) {
    const e = n == Q.None ? void 0 : be.logDelegate;
    ie.setLogDelegate(e);
    const u = be.getEventTypeString(n);
    E(u, (c) => _._api._Magick_SetLogEvents(c));
  }
  /** @internal */
  static _getFontFileName(n) {
    const e = `/fonts/${n}`;
    if (!_._api.FS.analyzePath(e).exists)
      throw `Unable to find a font with the name '${n}', add it with Magick.addFont.`;
    return e;
  }
  static getEventTypeString(n) {
    if (n == Q.All)
      return "All,Trace";
    if (n == Q.Detailed)
      return "All";
    switch (n) {
      case Q.Accelerate:
        return "Accelerate";
      case Q.Annotate:
        return "Annotate";
      case Q.Blob:
        return "Blob";
      case Q.Cache:
        return "Cache";
      case Q.Coder:
        return "Coder";
      case Q.Configure:
        return "Configure";
      case Q.Deprecate:
        return "Deprecate";
      case Q.Draw:
        return "Draw";
      case Q.Exception:
        return "Exception";
      case Q.Image:
        return "Image";
      case Q.Locale:
        return "Locale";
      case Q.Module:
        return "Module";
      case Q.Pixel:
        return "Pixel";
      case Q.Policy:
        return "Policy";
      case Q.Resource:
        return "Resource";
      case Q.Trace:
        return "Trace";
      case Q.Transform:
        return "Transform";
      case Q.User:
        return "User";
      case Q.Wand:
        return "Wand";
      case Q.None:
      default:
        return "None";
    }
  }
  static logDelegate(n) {
    be.onLog !== void 0 && be.onLog(n);
  }
}
class bu {
  _font;
  /**
   * Initializes a new instance of the {@link DrawableFont} class.
   * @param opacity The name of the font that was registered.
   */
  constructor(n) {
    this._font = n;
  }
  draw(n) {
    const e = be._getFontFileName(this._font);
    n.font(e);
  }
}
class Gu {
  _gravity;
  /**
   * Initializes a new instance of the {@link DrawableGravity} class.
   * @param gravity The gravity to use.
   */
  constructor(n) {
    this._gravity = n;
  }
  draw(n) {
    n.gravity(this._gravity);
  }
}
class Pu {
  _startX;
  _startY;
  _endX;
  _endY;
  /**
   * Initializes a new instance of the {@link DrawableLine} class.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  constructor(n, e, u, c) {
    this._startX = n, this._startY = e, this._endX = u, this._endY = c;
  }
  draw(n) {
    n.line(this._startX, this._startY, this._endX, this._endY);
  }
}
class Cu {
  _x;
  _y;
  /**
   * Initializes a new instance of the {@link DrawablePoint} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  constructor(n, e) {
    this._x = n, this._y = e;
  }
  draw(n) {
    n.point(this._x, this._y);
  }
}
class Au {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  /**
    * Initializes a new instance of the {@link DrawablePoint} class.
    * @param upperLeftX The upper left X coordinate.
    * @param upperLeftY The upper left Y coordinate.
    * @param lowerRightX The lower right X coordinate.
    * @param lowerRightY The lower right Y coordinate.
    */
  constructor(n, e, u, c) {
    this._upperLeftX = n, this._upperLeftY = e, this._lowerRightX = u, this._lowerRightY = c;
  }
  draw(n) {
    n.rectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY);
  }
}
class Ru {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  _cornerWidth;
  _cornerHeight;
  /**
   * Initializes a new instance of the {@link DrawableRoundRectangle} class.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  constructor(n, e, u, c, p, h) {
    this._upperLeftX = n, this._upperLeftY = e, this._lowerRightX = u, this._lowerRightY = c, this._cornerWidth = p, this._cornerHeight = h;
  }
  draw(n) {
    n.roundRectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY, this._cornerWidth, this._cornerHeight);
  }
}
class Eu {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableStrokeColor} class.
   * @param color The color to use.
   */
  constructor(n) {
    this._color = n;
  }
  draw(n) {
    n.strokeColor(this._color);
  }
}
class Tu {
  _width;
  /**
   * Initializes a new instance of the {@link DrawableStrokeWidth} class.
   * @param width The width.
   */
  constructor(n) {
    this._width = n;
  }
  draw(n) {
    n.strokeWidth(this._width);
  }
}
class Wu {
  _alignment;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param alignment The text alignment
   */
  constructor(n) {
    this._alignment = n;
  }
  draw(n) {
    n.textAlignment(this._alignment);
  }
}
class yt {
  _isEnabled;
  constructor(n) {
    this._isEnabled = n;
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias disabled.
   */
  static get disabled() {
    return new yt(!1);
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias enabled.
   */
  static get enabled() {
    return new yt(!0);
  }
  draw(n) {
    n.textAntialias(this._isEnabled);
  }
}
class Lu {
  _decoration;
  /**
   * Initializes a new instance of the {@link DrawableTextDecoration} class.
   * @param decoration The text decoration.
   */
  constructor(n) {
    this._decoration = n;
  }
  draw(n) {
    n.textDecoration(this._decoration);
  }
}
class Bu {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterlineSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(n) {
    this._spacing = n;
  }
  draw(n) {
    n.textInterlineSpacing(this._spacing);
  }
}
class xu {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterwordSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(n) {
    this._spacing = n;
  }
  draw(n) {
    n.textInterwordspacing(this._spacing);
  }
}
class zu {
  _kerning;
  /**
   * Initializes a new instance of the {@link DrawableTextKerning} class.
   * @param kerning The kerning to use.
   */
  constructor(n) {
    this._kerning = n;
  }
  draw(n) {
    n.textKerning(this._kerning);
  }
}
class Nu {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param decoration The color to use.
   */
  constructor(n) {
    this._color = n;
  }
  draw(n) {
    n.textUnderColor(this._color);
  }
}
class Hu {
  _x;
  _y;
  _value;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  constructor(n, e, u) {
    this._x = n, this._y = e, this._value = u;
  }
  draw(n) {
    n.text(this._x, this._y, this._value);
  }
}
class Uu {
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get None() {
    return new w(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get Transparent() {
    return new w(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0F8FFFF.
  */
  static get AliceBlue() {
    return new w(240, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAEBD7FF.
  */
  static get AntiqueWhite() {
    return new w(250, 235, 215, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Aqua() {
    return new w(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFFD4FF.
  */
  static get Aquamarine() {
    return new w(127, 255, 212, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFFFFF.
  */
  static get Azure() {
    return new w(240, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5DCFF.
  */
  static get Beige() {
    return new w(245, 245, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4C4FF.
  */
  static get Bisque() {
    return new w(255, 228, 196, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000000FF.
  */
  static get Black() {
    return new w(0, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEBCDFF.
  */
  static get BlanchedAlmond() {
    return new w(255, 235, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000FFFF.
  */
  static get Blue() {
    return new w(0, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8A2BE2FF.
  */
  static get BlueViolet() {
    return new w(138, 43, 226, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A52A2AFF.
  */
  static get Brown() {
    return new w(165, 42, 42, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DEB887FF.
  */
  static get BurlyWood() {
    return new w(222, 184, 135, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #5F9EA0FF.
  */
  static get CadetBlue() {
    return new w(95, 158, 160, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFF00FF.
  */
  static get Chartreuse() {
    return new w(127, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2691EFF.
  */
  static get Chocolate() {
    return new w(210, 105, 30, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF7F50FF.
  */
  static get Coral() {
    return new w(255, 127, 80, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6495EDFF.
  */
  static get CornflowerBlue() {
    return new w(100, 149, 237, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF8DCFF.
  */
  static get Cornsilk() {
    return new w(255, 248, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DC143CFF.
  */
  static get Crimson() {
    return new w(220, 20, 60, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Cyan() {
    return new w(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00008BFF.
  */
  static get DarkBlue() {
    return new w(0, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008B8BFF.
  */
  static get DarkCyan() {
    return new w(0, 139, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B8860BFF.
  */
  static get DarkGoldenrod() {
    return new w(184, 134, 11, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A9A9A9FF.
  */
  static get DarkGray() {
    return new w(169, 169, 169, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #006400FF.
  */
  static get DarkGreen() {
    return new w(0, 100, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BDB76BFF.
  */
  static get DarkKhaki() {
    return new w(189, 183, 107, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B008BFF.
  */
  static get DarkMagenta() {
    return new w(139, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #556B2FFF.
  */
  static get DarkOliveGreen() {
    return new w(85, 107, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF8C00FF.
  */
  static get DarkOrange() {
    return new w(255, 140, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9932CCFF.
  */
  static get DarkOrchid() {
    return new w(153, 50, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B0000FF.
  */
  static get DarkRed() {
    return new w(139, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E9967AFF.
  */
  static get DarkSalmon() {
    return new w(233, 150, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8FBC8FFF.
  */
  static get DarkSeaGreen() {
    return new w(143, 188, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #483D8BFF.
  */
  static get DarkSlateBlue() {
    return new w(72, 61, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2F4F4FFF.
  */
  static get DarkSlateGray() {
    return new w(47, 79, 79, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00CED1FF.
  */
  static get DarkTurquoise() {
    return new w(0, 206, 209, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9400D3FF.
  */
  static get DarkViolet() {
    return new w(148, 0, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF1493FF.
  */
  static get DeepPink() {
    return new w(255, 20, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00BFFFFF.
  */
  static get DeepSkyBlue() {
    return new w(0, 191, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #696969FF.
  */
  static get DimGray() {
    return new w(105, 105, 105, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #1E90FFFF.
  */
  static get DodgerBlue() {
    return new w(30, 144, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B22222FF.
  */
  static get Firebrick() {
    return new w(178, 34, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAF0FF.
  */
  static get FloralWhite() {
    return new w(255, 250, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #228B22FF.
  */
  static get ForestGreen() {
    return new w(34, 139, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Fuchsia() {
    return new w(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DCDCDCFF.
  */
  static get Gainsboro() {
    return new w(220, 220, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F8F8FFFF.
  */
  static get GhostWhite() {
    return new w(248, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFD700FF.
  */
  static get Gold() {
    return new w(255, 215, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DAA520FF.
  */
  static get Goldenrod() {
    return new w(218, 165, 32, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808080FF.
  */
  static get Gray() {
    return new w(128, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008000FF.
  */
  static get Green() {
    return new w(0, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADFF2FFF.
  */
  static get GreenYellow() {
    return new w(173, 255, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFF0FF.
  */
  static get Honeydew() {
    return new w(240, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF69B4FF.
  */
  static get HotPink() {
    return new w(255, 105, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD5C5CFF.
  */
  static get IndianRed() {
    return new w(205, 92, 92, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4B0082FF.
  */
  static get Indigo() {
    return new w(75, 0, 130, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFF0FF.
  */
  static get Ivory() {
    return new w(255, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0E68CFF.
  */
  static get Khaki() {
    return new w(240, 230, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E6E6FAFF.
  */
  static get Lavender() {
    return new w(230, 230, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF0F5FF.
  */
  static get LavenderBlush() {
    return new w(255, 240, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7CFC00FF.
  */
  static get LawnGreen() {
    return new w(124, 252, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFACDFF.
  */
  static get LemonChiffon() {
    return new w(255, 250, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADD8E6FF.
  */
  static get LightBlue() {
    return new w(173, 216, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F08080FF.
  */
  static get LightCoral() {
    return new w(240, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E0FFFFFF.
  */
  static get LightCyan() {
    return new w(224, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAFAD2FF.
  */
  static get LightGoldenrodYellow() {
    return new w(250, 250, 210, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #90EE90FF.
  */
  static get LightGreen() {
    return new w(144, 238, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D3D3D3FF.
  */
  static get LightGray() {
    return new w(211, 211, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFB6C1FF.
  */
  static get LightPink() {
    return new w(255, 182, 193, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA07AFF.
  */
  static get LightSalmon() {
    return new w(255, 160, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #20B2AAFF.
  */
  static get LightSeaGreen() {
    return new w(32, 178, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEFAFF.
  */
  static get LightSkyBlue() {
    return new w(135, 206, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #778899FF.
  */
  static get LightSlateGray() {
    return new w(119, 136, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0C4DEFF.
  */
  static get LightSteelBlue() {
    return new w(176, 196, 222, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFE0FF.
  */
  static get LightYellow() {
    return new w(255, 255, 224, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF00FF.
  */
  static get Lime() {
    return new w(0, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #32CD32FF.
  */
  static get LimeGreen() {
    return new w(50, 205, 50, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAF0E6FF.
  */
  static get Linen() {
    return new w(250, 240, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Magenta() {
    return new w(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800000FF.
  */
  static get Maroon() {
    return new w(128, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #66CDAAFF.
  */
  static get MediumAquamarine() {
    return new w(102, 205, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000CDFF.
  */
  static get MediumBlue() {
    return new w(0, 0, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BA55D3FF.
  */
  static get MediumOrchid() {
    return new w(186, 85, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9370DBFF.
  */
  static get MediumPurple() {
    return new w(147, 112, 219, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #3CB371FF.
  */
  static get MediumSeaGreen() {
    return new w(60, 179, 113, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7B68EEFF.
  */
  static get MediumSlateBlue() {
    return new w(123, 104, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FA9AFF.
  */
  static get MediumSpringGreen() {
    return new w(0, 250, 154, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #48D1CCFF.
  */
  static get MediumTurquoise() {
    return new w(72, 209, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C71585FF.
  */
  static get MediumVioletRed() {
    return new w(199, 21, 133, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #191970FF.
  */
  static get MidnightBlue() {
    return new w(25, 25, 112, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5FFFAFF.
  */
  static get MintCream() {
    return new w(245, 255, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4E1FF.
  */
  static get MistyRose() {
    return new w(255, 228, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4B5FF.
  */
  static get Moccasin() {
    return new w(255, 228, 181, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDEADFF.
  */
  static get NavajoWhite() {
    return new w(255, 222, 173, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000080FF.
  */
  static get Navy() {
    return new w(0, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FDF5E6FF.
  */
  static get OldLace() {
    return new w(253, 245, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808000FF.
  */
  static get Olive() {
    return new w(128, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6B8E23FF.
  */
  static get OliveDrab() {
    return new w(107, 142, 35, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA500FF.
  */
  static get Orange() {
    return new w(255, 165, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF4500FF.
  */
  static get OrangeRed() {
    return new w(255, 69, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DA70D6FF.
  */
  static get Orchid() {
    return new w(218, 112, 214, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EEE8AAFF.
  */
  static get PaleGoldenrod() {
    return new w(238, 232, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #98FB98FF.
  */
  static get PaleGreen() {
    return new w(152, 251, 152, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #AFEEEEFF.
  */
  static get PaleTurquoise() {
    return new w(175, 238, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DB7093FF.
  */
  static get PaleVioletRed() {
    return new w(219, 112, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEFD5FF.
  */
  static get PapayaWhip() {
    return new w(255, 239, 213, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDAB9FF.
  */
  static get PeachPuff() {
    return new w(255, 218, 185, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD853FFF.
  */
  static get Peru() {
    return new w(205, 133, 63, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFC0CBFF.
  */
  static get Pink() {
    return new w(255, 192, 203, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DDA0DDFF.
  */
  static get Plum() {
    return new w(221, 160, 221, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0E0E6FF.
  */
  static get PowderBlue() {
    return new w(176, 224, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800080FF.
  */
  static get Purple() {
    return new w(128, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #663399FF.
  */
  static get RebeccaPurple() {
    return new w(102, 51, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF0000FF.
  */
  static get Red() {
    return new w(255, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BC8F8FFF.
  */
  static get RosyBrown() {
    return new w(188, 143, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4169E1FF.
  */
  static get RoyalBlue() {
    return new w(65, 105, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B4513FF.
  */
  static get SaddleBrown() {
    return new w(139, 69, 19, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FA8072FF.
  */
  static get Salmon() {
    return new w(250, 128, 114, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F4A460FF.
  */
  static get SandyBrown() {
    return new w(244, 164, 96, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2E8B57FF.
  */
  static get SeaGreen() {
    return new w(46, 139, 87, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF5EEFF.
  */
  static get SeaShell() {
    return new w(255, 245, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A0522DFF.
  */
  static get Sienna() {
    return new w(160, 82, 45, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C0C0C0FF.
  */
  static get Silver() {
    return new w(192, 192, 192, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEEBFF.
  */
  static get SkyBlue() {
    return new w(135, 206, 235, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6A5ACDFF.
  */
  static get SlateBlue() {
    return new w(106, 90, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #708090FF.
  */
  static get SlateGray() {
    return new w(112, 128, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAFAFF.
  */
  static get Snow() {
    return new w(255, 250, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF7FFF.
  */
  static get SpringGreen() {
    return new w(0, 255, 127, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4682B4FF.
  */
  static get SteelBlue() {
    return new w(70, 130, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2B48CFF.
  */
  static get Tan() {
    return new w(210, 180, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008080FF.
  */
  static get Teal() {
    return new w(0, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D8BFD8FF.
  */
  static get Thistle() {
    return new w(216, 191, 216, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF6347FF.
  */
  static get Tomato() {
    return new w(255, 99, 71, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #40E0D0FF.
  */
  static get Turquoise() {
    return new w(64, 224, 208, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EE82EEFF.
  */
  static get Violet() {
    return new w(238, 130, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5DEB3FF.
  */
  static get Wheat() {
    return new w(245, 222, 179, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFFFFF.
  */
  static get White() {
    return new w(255, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5F5FF.
  */
  static get WhiteSmoke() {
    return new w(245, 245, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFF00FF.
  */
  static get Yellow() {
    return new w(255, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9ACD32FF.
  */
  static get YellowGreen() {
    return new w(154, 205, 50, 255);
  }
}
class mo {
  _drawables = [];
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  disableStrokeAntialias() {
    return this._drawables.push(yt.disabled), this;
  }
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  enableStrokeAntialias() {
    return this._drawables.push(yt.enabled), this;
  }
  /**
   * Adds a {@link DrawableFillColor} to the drawables.
   * @param color The color to use.
   */
  fillColor(n) {
    return this._drawables.push(new uu(n)), this;
  }
  /**
   * Adds a {@link DrawableFillOpacity} to the drawables.
   * @param opacity The opacity.
   */
  fillOpacity(n) {
    return this._drawables.push(new ou(n)), this;
  }
  /**
   * Adds a {@link DrawableFont} to the drawables.
   * @param font The name of the font that was registered.
   */
  font(n) {
    return this._drawables.push(new bu(n)), this;
  }
  /**
   * Adds a {@link DrawableFontPointSize} to the drawables.
   * @param pointSize The point size.
   */
  fontPointSize(n) {
    return this._drawables.push(new _u(n)), this;
  }
  /**
   * Obtain font metrics for text string given current font, pointsize, and density settings.
   * @param text The text to get the metrics for.
   * @param ignoreNewlines A value indicating whether newlines should be ignored.
   */
  fontTypeMetrics(n, e = !1) {
    return re._create((u) => (u.read(Uu.Transparent, 1, 1), zt._use(u, (c) => (c.draw(this._drawables), c.fontTypeMetrics(n, e)))));
  }
  /**
   * Adds a {@link DrawableGravity} to the drawables.
   * @param value The gravity to use.
   */
  gravity(n) {
    return this._drawables.push(new Gu(n)), this;
  }
  /**
   * Adds a {@link DrawableLine} to the drawables.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  line(n, e, u, c) {
    return this._drawables.push(new Pu(n, e, u, c)), this;
  }
  /**
   * Adds a {@link DrawablePoint} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  point(n, e) {
    return this._drawables.push(new Cu(n, e)), this;
  }
  /**
   * Adds a {@link DrawableRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   */
  rectangle(n, e, u, c) {
    return this._drawables.push(new Au(n, e, u, c)), this;
  }
  /**
   * Adds a {@link DrawableRoundRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  roundRectangle(n, e, u, c, p, h) {
    return this._drawables.push(new Ru(n, e, u, c, p, h)), this;
  }
  /**
   * Adds a {@link DrawableStrokeColor} to the drawables.
   * @param color The color to use.
   */
  strokeColor(n) {
    return this._drawables.push(new Eu(n)), this;
  }
  /**
   * Adds a {@link DrawableStrokeWidth} to the drawables.
   * @param width The width.
   */
  strokeWidth(n) {
    return this._drawables.push(new Tu(n)), this;
  }
  /**
   * Adds a {@link DrawableText} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  text(n, e, u) {
    return this._drawables.push(new Hu(n, e, u)), this;
  }
  /**
   * Adds a {@link DrawableTextAlignment} to the drawables.
   * @param alignment The text alignment.
   */
  textAlignment(n) {
    return this._drawables.push(new Wu(n)), this;
  }
  /**
   * Adds a {@link DrawableTextDecoration} to the drawables.
   * @param decoration The text decoration.
   */
  textDecoration(n) {
    return this._drawables.push(new Lu(n)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterlineSpacing(n) {
    return this._drawables.push(new Bu(n)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterwordSpacing(n) {
    return this._drawables.push(new xu(n)), this;
  }
  /**
   * Adds a {@link DrawableTextKerning} to the drawables.
   * @param kerning The kerning to use.
   */
  textKerning(n) {
    return this._drawables.push(new zu(n)), this;
  }
  /**
   * Adds a {@link DrawableTextUnderColor} to the drawables.
   * @param color The color to use.
   */
  textUnderColor(n) {
    return this._drawables.push(new Nu(n)), this;
  }
  /**
   * Draw on the specified image.
   * @param image The image to draw on.
   */
  draw(n) {
    return n.draw(this._drawables), this;
  }
}
var Fu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Kapur = 1] = "Kapur", t[t.OTSU = 2] = "OTSU", t[t.Triangle = 3] = "Triangle", t))(Fu || {}), $u = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Direct = 1] = "Direct", t[t.Pseudo = 2] = "Pseudo", t))($u || {}), Yu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Bilevel = 1] = "Bilevel", t[t.Grayscale = 2] = "Grayscale", t[t.GrayscaleAlpha = 3] = "GrayscaleAlpha", t[t.Palette = 4] = "Palette", t[t.PaletteAlpha = 5] = "PaletteAlpha", t[t.TrueColor = 6] = "TrueColor", t[t.TrueColorAlpha = 7] = "TrueColorAlpha", t[t.ColorSeparation = 8] = "ColorSeparation", t[t.ColorSeparationAlpha = 9] = "ColorSeparationAlpha", t[t.Optimize = 10] = "Optimize", t[t.PaletteBilevelAlpha = 11] = "PaletteBilevelAlpha", t))(Yu || {}), ju = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Add = 1] = "Add", t[t.Conjugate = 2] = "Conjugate", t[t.Divide = 3] = "Divide", t[t.MagnitudePhase = 4] = "MagnitudePhase", t[t.Multiply = 5] = "Multiply", t[t.RealImaginary = 6] = "RealImaginary", t[t.Subtract = 7] = "Subtract", t))(ju || {}), Dr = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.B44A = 1] = "B44A", t[t.B44 = 2] = "B44", t[t.BZip = 3] = "BZip", t[t.DXT1 = 4] = "DXT1", t[t.DXT3 = 5] = "DXT3", t[t.DXT5 = 6] = "DXT5", t[t.Fax = 7] = "Fax", t[t.Group4 = 8] = "Group4", t[t.JBIG1 = 9] = "JBIG1", t[t.JBIG2 = 10] = "JBIG2", t[t.JPEG2000 = 11] = "JPEG2000", t[t.JPEG = 12] = "JPEG", t[t.LosslessJPEG = 13] = "LosslessJPEG", t[t.LZMA = 14] = "LZMA", t[t.LZW = 15] = "LZW", t[t.NoCompression = 16] = "NoCompression", t[t.Piz = 17] = "Piz", t[t.Pxr24 = 18] = "Pxr24", t[t.RLE = 19] = "RLE", t[t.Zip = 20] = "Zip", t[t.ZipS = 21] = "ZipS", t[t.Zstd = 22] = "Zstd", t[t.WebP = 23] = "WebP", t[t.DWAA = 24] = "DWAA", t[t.DWAB = 25] = "DWAB", t[t.BC7 = 26] = "BC7", t[t.BC5 = 27] = "BC5", t))(Dr || {}), Xu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Affine = 1] = "Affine", t[t.AffineProjection = 2] = "AffineProjection", t[t.ScaleRotateTranslate = 3] = "ScaleRotateTranslate", t[t.Perspective = 4] = "Perspective", t[t.PerspectiveProjection = 5] = "PerspectiveProjection", t[t.BilinearForward = 6] = "BilinearForward", t[t.BilinearReverse = 7] = "BilinearReverse", t[t.Polynomial = 8] = "Polynomial", t[t.Arc = 9] = "Arc", t[t.Polar = 10] = "Polar", t[t.DePolar = 11] = "DePolar", t[t.Cylinder2Plane = 12] = "Cylinder2Plane", t[t.Plane2Cylinder = 13] = "Plane2Cylinder", t[t.Barrel = 14] = "Barrel", t[t.BarrelInverse = 15] = "BarrelInverse", t[t.Shepards = 16] = "Shepards", t[t.Resize = 17] = "Resize", t[t.Sentinel = 18] = "Sentinel", t[t.RigidAffine = 19] = "RigidAffine", t))(Xu || {}), Vu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.LSB = 1] = "LSB", t[t.MSB = 2] = "MSB", t))(Vu || {}), qu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Absolute = 1] = "Absolute", t[t.Fuzz = 2] = "Fuzz", t[t.MeanAbsolute = 3] = "MeanAbsolute", t[t.MeanErrorPerPixel = 4] = "MeanErrorPerPixel", t[t.MeanSquared = 5] = "MeanSquared", t[t.NormalizedCrossCorrelation = 6] = "NormalizedCrossCorrelation", t[t.PeakAbsolute = 7] = "PeakAbsolute", t[t.PeakSignalToNoiseRatio = 8] = "PeakSignalToNoiseRatio", t[t.PerceptualHash = 9] = "PerceptualHash", t[t.RootMeanSquared = 10] = "RootMeanSquared", t[t.StructuralSimilarity = 11] = "StructuralSimilarity", t[t.StructuralDissimilarity = 12] = "StructuralDissimilarity", t))(qu || {}), Qu = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Abs = 1] = "Abs", t[t.Add = 2] = "Add", t[t.AddModulus = 3] = "AddModulus", t[t.And = 4] = "And", t[t.Cosine = 5] = "Cosine", t[t.Divide = 6] = "Divide", t[t.Exponential = 7] = "Exponential", t[t.GaussianNoise = 8] = "GaussianNoise", t[t.ImpulseNoise = 9] = "ImpulseNoise", t[t.LaplacianNoise = 10] = "LaplacianNoise", t[t.LeftShift = 11] = "LeftShift", t[t.Log = 12] = "Log", t[t.Max = 13] = "Max", t[t.Mean = 14] = "Mean", t[t.Median = 15] = "Median", t[t.Min = 16] = "Min", t[t.MultiplicativeNoise = 17] = "MultiplicativeNoise", t[t.Multiply = 18] = "Multiply", t[t.Or = 19] = "Or", t[t.PoissonNoise = 20] = "PoissonNoise", t[t.Pow = 21] = "Pow", t[t.RightShift = 22] = "RightShift", t[t.RootMeanSquare = 23] = "RootMeanSquare", t[t.Set = 24] = "Set", t[t.Sine = 25] = "Sine", t[t.Subtract = 26] = "Subtract", t[t.Sum = 27] = "Sum", t[t.ThresholdBlack = 28] = "ThresholdBlack", t[t.Threshold = 29] = "Threshold", t[t.ThresholdWhite = 30] = "ThresholdWhite", t[t.UniformNoise = 31] = "UniformNoise", t[t.Xor = 32] = "Xor", t[t.InverseLog = 33] = "InverseLog", t))(Qu || {}), Ju = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Point = 1] = "Point", t[t.Box = 2] = "Box", t[t.Triangle = 3] = "Triangle", t[t.Hermite = 4] = "Hermite", t[t.Hann = 5] = "Hann", t[t.Hamming = 6] = "Hamming", t[t.Blackman = 7] = "Blackman", t[t.Gaussian = 8] = "Gaussian", t[t.Quadratic = 9] = "Quadratic", t[t.Cubic = 10] = "Cubic", t[t.Catrom = 11] = "Catrom", t[t.Mitchell = 12] = "Mitchell", t[t.Jinc = 13] = "Jinc", t[t.Sinc = 14] = "Sinc", t[t.SincFast = 15] = "SincFast", t[t.Kaiser = 16] = "Kaiser", t[t.Welch = 17] = "Welch", t[t.Parzen = 18] = "Parzen", t[t.Bohman = 19] = "Bohman", t[t.Bartlett = 20] = "Bartlett", t[t.Lagrange = 21] = "Lagrange", t[t.Lanczos = 22] = "Lanczos", t[t.LanczosSharp = 23] = "LanczosSharp", t[t.Lanczos2 = 24] = "Lanczos2", t[t.Lanczos2Sharp = 25] = "Lanczos2Sharp", t[t.Robidoux = 26] = "Robidoux", t[t.RobidouxSharp = 27] = "RobidouxSharp", t[t.Cosine = 28] = "Cosine", t[t.Spline = 29] = "Spline", t[t.LanczosRadius = 30] = "LanczosRadius", t[t.CubicSpline = 31] = "CubicSpline", t))(Ju || {}), Ku = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.None = 1] = "None", t[t.Background = 2] = "Background", t[t.Previous = 3] = "Previous", t))(Ku || {}), br = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.NoInterlace = 1] = "NoInterlace", t[t.Line = 2] = "Line", t[t.Plane = 3] = "Plane", t[t.Partition = 4] = "Partition", t[t.Gif = 5] = "Gif", t[t.Jpeg = 6] = "Jpeg", t[t.Png = 7] = "Png", t))(br || {}), Zu = /* @__PURE__ */ ((t) => (t.Undefined = "Undefined", t.Unity = "Unity", t.Gaussian = "Gaussian", t.DoG = "DoG", t.LoG = "LoG", t.Blur = "Blur", t.Comet = "Comet", t.Binomial = "Binomial", t.Laplacian = "Laplacian", t.Sobel = "Sobel", t.FreiChen = "FreiChen", t.Roberts = "Roberts", t.Prewitt = "Prewitt", t.Compass = "Compass", t.Kirsch = "Kirsch", t.Diamond = "Diamond", t.Square = "Square", t.Rectangle = "Rectangle", t.Octagon = "Octagon", t.Disk = "Disk", t.Plus = "Plus", t.Cross = "Cross", t.Ring = "Ring", t.Peaks = "Peaks", t.Edges = "Edges", t.Corners = "Corners", t.Diagonals = "Diagonals", t.LineEnds = "LineEnds", t.LineJunctions = "LineJunctions", t.Ridges = "Ridges", t.ConvexHull = "ConvexHull", t.ThinSE = "ThinSE", t.Skeleton = "Skeleton", t.Chebyshev = "Chebyshev", t.Manhattan = "Manhattan", t.Octagonal = "Octagonal", t.Euclidean = "Euclidean", t.UserDefined = "UserDefined", t))(Zu || {}), Ou = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Convolve = 1] = "Convolve", t[t.Correlate = 2] = "Correlate", t[t.Erode = 3] = "Erode", t[t.Dilate = 4] = "Dilate", t[t.ErodeIntensity = 5] = "ErodeIntensity", t[t.DilateIntensity = 6] = "DilateIntensity", t[t.IterativeDistance = 7] = "IterativeDistance", t[t.Open = 8] = "Open", t[t.Close = 9] = "Close", t[t.OpenIntensity = 10] = "OpenIntensity", t[t.CloseIntensity = 11] = "CloseIntensity", t[t.Smooth = 12] = "Smooth", t[t.EdgeIn = 13] = "EdgeIn", t[t.EdgeOut = 14] = "EdgeOut", t[t.Edge = 15] = "Edge", t[t.TopHat = 16] = "TopHat", t[t.BottomHat = 17] = "BottomHat", t[t.HitAndMiss = 18] = "HitAndMiss", t[t.Thinning = 19] = "Thinning", t[t.Thicken = 20] = "Thicken", t[t.Distance = 21] = "Distance", t[t.Voronoi = 22] = "Voronoi", t))(Ou || {}), eo = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Uniform = 1] = "Uniform", t[t.Gaussian = 2] = "Gaussian", t[t.MultiplicativeGaussian = 3] = "MultiplicativeGaussian", t[t.Impulse = 4] = "Impulse", t[t.Laplacian = 5] = "Laplacian", t[t.Poisson = 6] = "Poisson", t[t.Random = 7] = "Random", t))(eo || {}), Gr = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.TopLeft = 1] = "TopLeft", t[t.TopRight = 2] = "TopRight", t[t.BottomRight = 3] = "BottomRight", t[t.BottomLeft = 4] = "BottomLeft", t[t.LeftTop = 5] = "LeftTop", t[t.RightTop = 6] = "RightTop", t[t.RightBottom = 7] = "RightBottom", t[t.LeftBottom = 8] = "LeftBottom", t))(Gr || {}), to = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Point = 1] = "Point", t[t.Replace = 2] = "Replace", t[t.Floodfill = 3] = "Floodfill", t[t.FillToBorder = 4] = "FillToBorder", t[t.Reset = 5] = "Reset", t))(to || {}), no = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Average = 1] = "Average", t[t.Average9 = 2] = "Average9", t[t.Average16 = 3] = "Average16", t[t.Background = 4] = "Background", t[t.Bilinear = 5] = "Bilinear", t[t.Blend = 6] = "Blend", t[t.Catrom = 7] = "Catrom", t[t.Integer = 8] = "Integer", t[t.Mesh = 9] = "Mesh", t[t.Nearest = 10] = "Nearest", t[t.Spline = 11] = "Spline", t))(no || {}), ro = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Saturation = 1] = "Saturation", t[t.Perceptual = 2] = "Perceptual", t[t.Absolute = 3] = "Absolute", t[t.Relative = 4] = "Relative", t))(ro || {}), ao = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Left = 1] = "Left", t[t.Center = 2] = "Center", t[t.Right = 3] = "Right", t))(ao || {}), io = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.None = 1] = "None", t[t.Underline = 2] = "Underline", t[t.Overline = 3] = "Overline", t[t.LineThrough = 4] = "LineThrough", t))(io || {}), so = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Background = 1] = "Background", t[t.Dither = 2] = "Dither", t[t.Edge = 3] = "Edge", t[t.Mirror = 4] = "Mirror", t[t.Random = 5] = "Random", t[t.Tile = 6] = "Tile", t[t.Transparent = 7] = "Transparent", t[t.Mask = 8] = "Mask", t[t.Black = 9] = "Black", t[t.Gray = 10] = "Gray", t[t.White = 11] = "White", t[t.HorizontalTile = 12] = "HorizontalTile", t[t.VerticalTile = 13] = "VerticalTile", t[t.HorizontalTileEdge = 14] = "HorizontalTileEdge", t[t.VerticalTileEdge = 15] = "VerticalTileEdge", t[t.CheckerTile = 16] = "CheckerTile", t))(so || {}), uo = /* @__PURE__ */ ((t) => (t[t.Disabled = -1] = "Disabled", t[t.Linear = 0] = "Linear", t[t.Vng = 1] = "Vng", t[t.Ppg = 2] = "Ppg", t[t.Ahd = 3] = "Ahd", t[t.DCB = 4] = "DCB", t[t.Dht = 11] = "Dht", t[t.ModifiedAhd = 12] = "ModifiedAhd", t))(uo || {}), oo = /* @__PURE__ */ ((t) => (t[t.Raw = 0] = "Raw", t[t.SRGB = 1] = "SRGB", t[t.AdobeRGB = 2] = "AdobeRGB", t[t.WideGamutRGB = 3] = "WideGamutRGB", t[t.KodakProPhotoRGB = 4] = "KodakProPhotoRGB", t[t.XYZ = 5] = "XYZ", t[t.ACES = 6] = "ACES", t))(oo || {});
class fo extends su {
  constructor() {
    super(Pe.Dng);
  }
  /**
   * Gets or sets a value indicating wether auto brightness should be used (dng:no-auto-bright).
   */
  disableAutoBrightness;
  /**
   * Gets or sets a value indicating the interpolation quality (dng:interpolation-quality).
   */
  interpolationQuality;
  /**
   * Gets or sets the output color (dng:output-color).
   */
  outputColor;
  /**
  * Gets or sets a value indicating wether auto whitebalance should be used (dng:use-auto-wb).
  */
  useAutoWhitebalance;
  /**
   * Gets or sets a value indicating wether the whitebalance of the camera should be used (dng:use-camera-wb).
   */
  useCameraWhitebalance;
  getDefines() {
    const n = [];
    return this.hasValue(this.interpolationQuality) && n.push(this.createDefine("interpolation-quality", this.interpolationQuality)), this.hasValue(this.disableAutoBrightness) && n.push(this.createDefine("no-auto-bright", this.disableAutoBrightness)), this.hasValue(this.outputColor) && n.push(this.createDefine("output-color", this.outputColor)), this.hasValue(this.useCameraWhitebalance) && n.push(this.createDefine("use-camera-wb", this.useCameraWhitebalance)), this.hasValue(this.useAutoWhitebalance) && n.push(this.createDefine("use-auto-wb", this.useAutoWhitebalance)), n;
  }
}
class Pr {
  _colorSpace = ne.Undefined;
  _compression = Dr.Undefined;
  _density = new Ke(0, 0);
  _format = Pe.Unknown;
  _height = 0;
  _interlace = br.Undefined;
  _orientation = Gr.Undefined;
  _quality = 0;
  _width = 0;
  get colorSpace() {
    return this._colorSpace;
  }
  get compression() {
    return this._compression;
  }
  get density() {
    return this._density;
  }
  get format() {
    return this._format;
  }
  get height() {
    return this._height;
  }
  get interlace() {
    return this._interlace;
  }
  get orientation() {
    return this._orientation;
  }
  get quality() {
    return this._quality;
  }
  get width() {
    return this._width;
  }
  constructor() {
  }
  read(n, e) {
    re._create((u) => {
      u.ping(n, e), this._colorSpace = u.colorSpace, this._compression = u.compression, this._density = u.density, this._format = u.format, this._height = u.height, this._interlace = u.interlace, this._orientation = u.orientation, this._quality = u.quality, this._width = u.width;
    });
  }
  static create(n, e) {
    const u = new Pr();
    return u.read(n, e), u;
  }
}
class po {
  /**
   * Initializes a new instance of the {@link ComplexSettings} class.
   * @param complexOperator The complex operator.
   */
  constructor(n) {
    this.complexOperator = n;
  }
  /**F
   * Gets or sets the complex operator.
   **/
  complexOperator;
  /**
   * Gets or sets the signal to noise ratio.
   **/
  signalToNoiseRatio;
  /** @internal */
  _setArtifacts(n) {
    this.signalToNoiseRatio !== void 0 && n.setArtifact("complex:snr", this.signalToNoiseRatio);
  }
}
class ho {
  constructor(n) {
    this.method = n;
  }
  /**
   * Gets the distortion method to use.
   */
  method;
  /**
   * Gets or sets a value indicating whether distort attempt to 'bestfit' the size of the resulting image.
   */
  bestFit = !1;
  /**
   * Gets or sets a value to scale the size of the output canvas by this amount to provide a method of
   * Zooming, and for super-sampling the results.
   */
  scale;
  /**
   * Gets or sets the viewport that directly set the output image canvas area and offest to use for the
   * resulting image, rather than use the original images canvas, or a calculated 'bestfit' canvas.
   */
  viewport;
  /** @internal */
  _setArtifacts(n) {
    this.scale !== void 0 && n.setArtifact("distort:scale", this.scale.toString()), this.viewport !== void 0 && n.setArtifact("distort:viewport", this.viewport.toString());
  }
}
class _o extends Ye {
  constructor(n) {
    const e = _._api._MontageSettings_Create(), u = _._api._MontageSettings_Dispose;
    if (super(e, u), n.backgroundColor !== void 0 && n.backgroundColor._use((c) => {
      _._api._MontageSettings_SetBackgroundColor(this._instance, c);
    }), n.borderColor !== void 0 && n.borderColor._use((c) => {
      _._api._MontageSettings_SetBorderColor(this._instance, c);
    }), n.borderWidth !== void 0 && _._api._MontageSettings_SetBorderWidth(this._instance, n.borderWidth), n.fillColor !== void 0 && n.fillColor._use((c) => {
      _._api._MontageSettings_SetFillColor(this._instance, c);
    }), n.font !== void 0) {
      const c = be._getFontFileName(n.font);
      E(c, (p) => {
        _._api._MontageSettings_SetFont(this._instance, p);
      });
    }
    n.fontPointsize !== void 0 && _._api._MontageSettings_SetFontPointsize(this._instance, n.fontPointsize), n.frameGeometry !== void 0 && E(n.frameGeometry.toString(), (c) => {
      _._api._MontageSettings_SetFrameGeometry(this._instance, c);
    }), n.geometry !== void 0 && E(n.geometry.toString(), (c) => {
      _._api._MontageSettings_SetGeometry(this._instance, c);
    }), n.gravity !== void 0 && _._api._MontageSettings_SetGravity(this._instance, n.gravity), n.shadow !== void 0 && _._api._MontageSettings_SetShadow(this._instance, n.shadow ? 1 : 0), n.strokeColor !== void 0 && n.strokeColor._use((c) => {
      _._api._MontageSettings_SetStrokeColor(this._instance, c);
    }), n.textureFileName !== void 0 && E(n.textureFileName, (c) => {
      _._api._MontageSettings_SetTextureFileName(this._instance, c);
    }), n.tileGeometry !== void 0 && E(n.tileGeometry.toString(), (c) => {
      _._api._MontageSettings_SetTileGeometry(this._instance, c);
    }), n.title !== void 0 && E(n.title, (c) => {
      _._api._MontageSettings_SetTitle(this._instance, c);
    });
  }
}
class yo {
  /**
   * Gets or sets the color of the background that thumbnails are composed on.
   */
  backgroundColor;
  /**
   * Gets or sets the frame border color.
   */
  borderColor;
  /**
   * Gets or sets the pixels between thumbnail and surrounding frame.
   */
  borderWidth;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the label font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the frame geometry (width & height frame thickness).
   */
  frameGeometry;
  /**
   * Gets or sets the thumbnail width & height plus border width &amp; height.
   */
  geometry;
  /**
   * Gets or sets the thumbnail position (e.g. Southwest).
   */
  gravity;
  /**
   * Gets or sets the thumbnail label (applied to image prior to montage).
   */
  label;
  /**
   * Gets or sets a value indicating whether drop-shadows on thumbnails are enabled or disabled.
   */
  shadow;
  /**
   * Gets or sets the outline color.
   */
  strokeColor;
  /**
   * Gets or sets the background texture image.
   */
  textureFileName;
  /**
   * Gets or sets the frame geometry (width &amp; height frame thickness).
   */
  tileGeometry;
  /**
   * Gets or sets the montage title.
   */
  title;
  /**
   * Gets or sets the transparent color.
   */
  transparentColor;
  _use(n) {
    const e = new _o(this);
    return ce._disposeAfterExecution(e, n);
  }
}
class wo {
  constructor(n, e, u) {
    this.method = n, this.kernel = e, u !== void 0 && (this.kernel += `:${u}`);
  }
  /**
   * Gets or sets the channels to apply the kernel to.
   */
  channels = J.Composite;
  /**
   * Gets or sets the bias to use when the method is Convolve.
   */
  convolveBias;
  /**
   * Gets or sets the scale to use when the method is Convolve.
   */
  convolveScale;
  /**
   * Gets or sets the number of iterations.
   */
  iterations = 1;
  /**
   * Gets or sets built-in kernel.
   */
  kernel;
  /**
   * Gets or sets the morphology method.
   */
  method;
}
class So {
  /**
   * Initializes a new instance of the {@link Threshold} class.
   * @param minimum The minimum value of the threshold.
   * @param maximum The maximum value of the threshold (or 0 if no maximum).
   */
  constructor(n, e = 0) {
    this.minimum = n, this.maximum = e;
  }
  /**
   * Gets the minimum of this threshold.
   */
  minimum;
  /**
  * Gets the maximum of this threshold.
  */
  maximum;
  /**
   * Convert the threshold to a string.
   */
  toString() {
    return this.maximum === 0 ? this.minimum.toString() : `${this.minimum}-${this.maximum}`;
  }
}
export {
  yr as AlphaOption,
  Fu as AutoThresholdMethod,
  ku as ChannelStatistics,
  J as Channels,
  cu as ChromaticityInfo,
  $u as ClassType,
  fu as ColorProfile,
  ne as ColorSpace,
  Yu as ColorType,
  on as CompareResult,
  pu as CompareSettings,
  ju as ComplexOperator,
  po as ComplexSettings,
  Wt as CompositeOperator,
  Dr as CompressionMethod,
  gr as ConfigurationFile,
  sn as ConfigurationFiles,
  _n as ConnectedComponent,
  hu as ConnectedComponentsSettings,
  su as DefinesCreator,
  Ke as Density,
  Ee as DensityUnit,
  Xu as DistortMethod,
  ho as DistortSettings,
  mn as DitherMethod,
  uo as DngInterpolation,
  oo as DngOutputColor,
  fo as DngReadDefines,
  co as DrawableColor,
  uu as DrawableFillColor,
  ou as DrawableFillOpacity,
  bu as DrawableFont,
  _u as DrawableFontPointSize,
  Gu as DrawableGravity,
  Pu as DrawableLine,
  Cu as DrawablePoint,
  Au as DrawableRectangle,
  Ru as DrawableRoundRectangle,
  Eu as DrawableStrokeColor,
  Tu as DrawableStrokeWidth,
  Hu as DrawableText,
  Wu as DrawableTextAlignment,
  yt as DrawableTextAntialias,
  Lu as DrawableTextDecoration,
  Bu as DrawableTextInterlineSpacing,
  xu as DrawableTextInterwordSpacing,
  zu as DrawableTextKerning,
  Nu as DrawableTextUnderColor,
  mo as Drawables,
  zt as DrawingWand,
  Vu as Endian,
  qu as ErrorMetric,
  Qu as EvaluateOperator,
  Ju as FilterType,
  Ku as GifDisposeMethod,
  Lt as Gravity,
  _ as ImageMagick,
  wr as ImageProfile,
  br as Interlace,
  Zu as Kernel,
  lu as LogEvent,
  Q as LogEventTypes,
  be as Magick,
  w as MagickColor,
  Uu as MagickColors,
  nn as MagickDefine,
  K as MagickError,
  Nt as MagickErrorInfo,
  xt as MagickErrorSeverity,
  Pe as MagickFormat,
  Te as MagickFormatInfo,
  le as MagickGeometry,
  re as MagickImage,
  Me as MagickImageCollection,
  Pr as MagickImageInfo,
  De as MagickReadSettings,
  dt as MagickSettings,
  yo as MontageSettings,
  Ou as MorphologyMethod,
  wo as MorphologySettings,
  Ye as NativeInstance,
  eo as NoiseType,
  Gr as OrientationType,
  to as PaintMethod,
  se as Percentage,
  $ as PixelChannel,
  Ze as PixelCollection,
  Mr as PixelIntensityMethod,
  no as PixelInterpolateMethod,
  Ie as Point,
  Fe as PrimaryInfo,
  Du as ProgressEvent,
  an as QuantizeSettings,
  $e as Quantum,
  ro as RenderingIntent,
  fn as Statistics,
  ao as TextAlignment,
  io as TextDecoration,
  So as Threshold,
  cn as TypeMetric,
  so as VirtualPixelMethod,
  hr as WarningEvent,
  yu as _getEdges,
  dr as _isByteArray,
  go as initializeImageMagick
};
