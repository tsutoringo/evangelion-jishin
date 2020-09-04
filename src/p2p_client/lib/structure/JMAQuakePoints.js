import JMAQuakePoint from './JMAQuakePoint';

/**
 * @typedef {Array<Object>} separatedPoints
 * @prop {String} pref 都道府県
 * @prop {Array<Object>} addrs 震度観測点
 * @prop {Scale} addrs.scale 観測震度
 * @prop {String} addrs.addr 震度観測点名称
 */

/**
 * JMAQuakePointの配列
 * @extends Array
 */
class JMAQuakePoints extends Array {
	constructor() {
		super();
	}
	/**
	 * 観測地点を追加します
	 * @param {JMAQuakePoint} point 観測地点
	 */
	add(point) {
		if(!(point instanceof JMAQuakePoint)) {
			throw new Error("not JMAQuakePoint instance");
		}
		this.push(point);
	}
	/**
	 * 変換された扱いやすい形で返します
	 * @return {separatedPoints} 
	 */
	separateArray() {
		const result = [];
		for(const point of this) {
			if(result.find(p => p.pref === point.pref)) {
				result.find(p => p.pref === point.pref).addrs.push({
					scale: point.scale,
					addr: point.addr
				});
			} else {
				result.push({
					pref: point.pref,
					addrs: [
						{
							addr: point.addr,
							scale: point.scale
						}
					]
				})
			}
		}
		return result;
	}
}

export default JMAQuakePoints;