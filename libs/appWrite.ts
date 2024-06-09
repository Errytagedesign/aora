import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.codeeq.aora',
  projectId: '6665ec9c001d2c30c176',
  storageId: '6666084f00292c3dc1c2',
  databaseId: '6666022a002edad9059c',
  userCollectionId: '66660242001908712708',
  videoCollectionId: '66660250002500db330a',
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const registeredUser = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!registeredUser) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: registeredUser.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      },
    );

    return newUser;
  } catch (error: any) {
    console.log('app', error);

    throw new Error(error);
  }
};

// Sign In
export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    throw new Error(error);
  }
};
