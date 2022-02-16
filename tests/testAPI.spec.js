import API from '../services/fetchAPI'

describe('Testa se a API está retornando alguma coisa', () => {
  API.fetchURL = jest.fn(async () => {
    const user = {
      gender: "female",
      name: {
        title: "Ms",
        first: "Melike",
        last: "Erçetin"
      },
      location: {
        street: {
          number: 3222,
          name: "Istiklal Cd"
        },
        city: "Karabük",
        state: "Mersin",
        country: "Turkey",
        postcode: 94068,
        coordinates: {
          latitude: "78.9566",
          longitude: "152.4526"
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland"
        }
      },
      email: "melike.ercetin@example.com",
      login: {
        uuid: "a6e557f6-ef85-4bd4-a5af-b4773e90543c",
        username: "yellowostrich352",
        password: "niceass",
        salt: "8HvT1s4w",
        md5: "65580f7427cb027d169fd85665b28c43",
        sha1: "6003af6a32893852db26d29875045c0fe5f80743",
        sha256: "1b4d26390c2e013108293d008393535d4dc31d7159c016732e9ffa4e605a2b6b"
      },
      dob: {
        date: "1970-04-03T12:42:25.775Z",
        age: 52
      },
      registered: {
        date: "2010-07-12T16:02:05.782Z",
        age: 12
      },
      phone: "(860)-322-7430",
      cell: "(985)-277-2459",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/18.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg"
      },
      nat: "TR",
    };
    return user;
  })
  
  test('verifica o usuario atraves da função fetchAPI', async () => {
    API.fetchAPI().then((user) => {
      console.log(user, 'test');
      expect(user.gender).toEqual('female');
    });
  });
});