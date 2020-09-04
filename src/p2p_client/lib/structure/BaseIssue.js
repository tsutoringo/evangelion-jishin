
/**
 * Issueのベース
 * @prop {String} [source] 発表元
 * @prop {Date} time 発表日時
 * @prop {String} type 発表種類
 */
class BaseIssue {
	/**
	 * 
	 * @param {Oject} data
	 * @param {String} [data.source] 
	 * @param {Date} data.time 
	 * @param {String} data.type 
	 */
	constructor(data) {
		this.source = data.source;
		this.time = new Date(data.time);
		this.type = data.type;
	}
}

export default BaseIssue;