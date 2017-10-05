import data_model_array from './arrayModel';

export default function modelOfArray(name, schema) {
  const new_obj = Object.create(data_model_array);
  new_obj.name = name;
  new_obj.setSchema(schema);
  return new_obj;
}
