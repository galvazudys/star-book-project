import schema from './schema/statusSchema';
import Creator from './arrayModelCreator';
import db from './statusDB';

const status = Creator('status', schema);
status.setDb(db);

export default status;
