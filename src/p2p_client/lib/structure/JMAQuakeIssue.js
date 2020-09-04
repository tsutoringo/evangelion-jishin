import BaseIssue from './BaseIssue';
import {ISSUE_TYPE} from '../Constants'

/**
 * 発表元の情報
 * @prop {String} [correct] 訂正の有無
 */
class JMAQuakeIssue extends BaseIssue {
	#client;
	constructor(client, data) {
		super(data);
		this.correct = data.correct;
		this.#client = client;
	}
	/**
	 * フォーマットされた値が返されます
	 * @type {String}
	 */
	get formattedType() {
		return ISSUE_TYPE[this.type];
	}
}

export default JMAQuakeIssue;