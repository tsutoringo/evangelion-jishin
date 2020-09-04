import Base from './Base';
import JMAQuakePoint from './JMAQuakePoint';
import JMAQuakePoints from './JMAQuakePoints';
import JMAQuakeIssue from './JMAQuakeIssue';
import JMAQuakeEarthQuake from './JMAQuakeEarthQuake';

/**
 * 地震全体の情報
 * @extends Base
 * @prop {JMAQuakeIssue} issue 発表元の情報
 * @prop {JMAQuakeEarthQuake} earthquake 地震の詳細な情報
 * @prop {JMAQuakePoints<JMAQuakePoint>} [points = JMAQuakePoints]
 */
class JMAQuake extends Base {
	#client;
	/**
	 * 
	 * @param {Client} client 
	 * @param {Object} data 
	 */
	constructor(client, data) {
		super(data);
		this.#client = client;
		this.issue = new JMAQuakeIssue(client, data.issue);
		if(data.earthquake) this.earthquake = new JMAQuakeEarthQuake(client, data.earthquake);
		this.points = new JMAQuakePoints();
		if(data.points) for(const point of data.points) this.points.add(new JMAQuakePoint(client, point));
	}
}

export default JMAQuake;