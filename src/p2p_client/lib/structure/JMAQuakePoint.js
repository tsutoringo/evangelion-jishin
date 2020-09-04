import Client from '../Client';// eslint-disable-line no-unused-vars
import Scale from './Scale';

/**
 * 震度観測点の情報
 * @prop {String} pref 都道府県
 * @prop {String} addr 震度観測点名称（震度速報の場合は 気象庁 | 緊急地震速報や震度情報で用いる区域の名称 に記載のある区域名）
 * @prop {Scale} scale 震度
 */
class JMAQuakePoint {
	#client;
	/**
	 * 
	 * @param {Client} client
	 * @param {Object} data
	 * @param {String} data.pref 都道府県
	 * @param {String} data.addr 震度観測点名称
	 * @param {Boolean} data.isArea 区域名かどうか
	 * @param {Number} data.scale
	 */
	constructor(client, data) {
		this.#client = client;
		this.pref = data.pref;
		this.addr = data.addr;
		this.scale = new Scale(data.scale);
	}
}

export default JMAQuakePoint;