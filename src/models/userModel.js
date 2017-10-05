import schema from './schema/userSchema';
import Creator from './arrayModelCreator';

const user = Creator('user', schema);
export default user;
