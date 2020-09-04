import API from './API';
import * as Endpoints from './API/Endpoints';
import JMAQuake from './structure/JMAQuake';
import Collection from './util/Collection';

/**
 * メインのP2Pクライアントを指します
 * @prop {API} API APIに接続する
 */
class P2PClient {
	constructor(option) {
		this.option = Object.assign({
			getQuakeList: 20,
		}, option)
		this.API = new API(this);
	}
	/**
	 * 地震情報を返却します。デフォルトは新しい順に最大10件です。 データは2015年1月10日から提供しています。
	 * @param {Object} [param] request parameter
	 * @param {Number} [param.limit] 返却件数 (1〜100、デフォルトは10)
	 * @param {Number} [param.offset] 読み飛ばす件数 (0以上、デフォルトは0)。例えば、 limit=100&offset=200 とすると、201件目から100件を返却します。
	 * @param {Number} [param.order] 並び順。1は昇順（古い順）、-1は降順（新しい順）です。デフォルトは降順。
	 * @param {String} [param.since_date] 指定日かそれ以降 (yyyyMMdd形式)
	 * @param {String} [param.until_date] 指定日かそれ以前 (yyyyMMdd形式)
	 * @param {String} [param.quake_type] 地震情報の種類
	 * @param {Number} [param.min_magnitude] マグニチュード下限
	 * @param {Number} [param.max_magnitude] マグニチュード上限
	 * @param {Number} [param.min_scale] 最大震度の下限
	 * @param {Number} [param.max_scale] 最大震度の上限
	 * @param {Number} [param.prefectures[]] 各都道府県の最低震度。 "兵庫県,10" のように指定します。
	 * @returns {Promise<Collection<JMAQuake>>} JMAQuakeのコレクション
	 */
	async getQuakeList(param) {
		const collection = new Collection(JMAQuake);
		(await this.API.request(Endpoints.QUAKE_LIST, param)).data.forEach(data => collection.add(new JMAQuake(this, data)));
		return collection;
	}
}

export default P2PClient;