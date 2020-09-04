import Scale from './Scale'

/**
 * 地震の詳細な情報
 * @prop {Date} time 発生日時
 * @prop {Object} [hypocenter] 震源情報
 * @prop {String} [hypocenter.name] 名称
 * @prop {Number} [hypocenter.latitude] 緯度。震源情報が存在しない場合は-200となります。
 * @prop {Number} [hypocenter.longitude] 経度。震源情報が存在しない場合は-200となります。
 * @prop {Number} [hypocenter.depth] 深さ(km)。「ごく浅い」は0、震源情報が存在しない場合は-1となります。
 * @prop {Number} [hypocenter.magnitude] マグニチュード。震源情報が存在しない場合は-1となります。
 * @prop {Scale} [maxScale] 最大震度。震度情報が存在しない場合は-1となります。
 * @prop {String} [domesticTsunami] 国内への津波の有無
 * @prop {String} [foreignTsunami] 海外での津波の有無
 */
class JMAQuakeEarthQuake {
	#client;
	/**
	 * @param {Client} client
	 * @param {Object} [data] 地震発生場所の詳細
	 * @param {String} data.time 発生日時
	 * @param {Object} [data.hypocenter] 震源情報
	 * @param {String} [data.hypocenter.name] 名称
	 * @param {Number} [data.hypocenter.latitude] 緯度。震源情報が存在しない場合は-200となります。
	 * @param {Number} [data.hypocenter.longitude] 経度。震源情報が存在しない場合は-200となります。
	 * @param {Number} [data.hypocenter.depth] 深さ(km)。「ごく浅い」は0、震源情報が存在しない場合は-1となります。
	 * @param {Number} [data.hypocenter.magnitude] マグニチュード。震源情報が存在しない場合は-1となります。
	 * @param {Number} [data.maxScale] 最大震度。震度情報が存在しない場合は-1となります。
	 * @param {String} [data.domesticTsunami] 国内への津波の有無
	 * @param {String} [data.foreignTsunami] 海外での津波の有無
	 */
	constructor(client, data) {
		this.#client = client;
		this.time = new Date(data.time);
		if(data.hypocenter) {
			this.hypocenter = {
				...data.hypocenter
			}
		}
		if(data.maxScale) this.maxScale = new Scale(data.maxScale);
		this.domesticTsunami = data.domesticTsunami;
		this.foreignTsunami = data.foreignTsunami;
	}
}

export default JMAQuakeEarthQuake;