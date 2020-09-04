
/**
 * IDをもつオブジェクトのベース
 * @param {String} id 
 * @param {String} code
 * @param {Date} time
 */
class Base {
	constructor(data) {
		this.id = data.id;
		this.code = data.code;
		this.time = new Date(data.time);
	}
}

export default Base;