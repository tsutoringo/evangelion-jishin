import { SCALE_FORMAT } from '../Constants'

/**
 * 震度を返します
 * @extends {Number}
 */
class Scale extends Number {
	constructor(scale) {
		super(scale)
	}
	/**
	 * フォーマットしやすい形で返されます
	 * @type {Object}
	 */
	get formatted() {
		return SCALE_FORMAT[this];
	}
}

export default Scale;
