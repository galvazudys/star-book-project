import schema from './schema/userSchema';
import Creator from './arrayModelCreator';
import database from './array_db';

const user = Creator('user', schema);
user.setDb(database);
export default user;
