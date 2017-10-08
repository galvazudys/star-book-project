import thumbnail from './schema/thumbnailSchema';
import Creator from './arrayModelCreator';
import db from './thumbnailsDB';

const thumbnailModel = Creator('thumbnail', thumbnail);
thumbnailModel.setDb(db);

export default thumbnailModel;
