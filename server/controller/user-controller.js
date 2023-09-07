import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
}

export const getUser = async (request, response) => {
  // console.log(request.params.id);
  try {
    const user = await User.findOne({ userId: request.params.id});
    // const user = await user.findById(request.params.id);  //2nd method not working here don't know
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
}

export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);

  try {
    await User.updateOne({ userId: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ userId: request.params.id });
    response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}