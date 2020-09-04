import Base from './Base'

/**
 * JMATsunami
 * @prop {Boolean} cancelled
 * @prop {Object} issue
 * @prop {Array} [area]
 */
class JMATsunami extends Base {
	#client;
	constructor(client, data) {
		super(data);
		this.#client = client;
		this.cancelled = data.cancelled;
		this.issue = data.issue;
		this.area = data.area;
	}
}

export default JMATsunami;