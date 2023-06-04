class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._token = headers["authorization"];
    this._headers = headers;
  }

  // обработка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // загрузка информации о пользователе с сервера
  async getUserData() {
    const res = await fetch(this._userUrl, {
      headers: {
        authorization: this._token,
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }

  // загрузка карточек с сервера
  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // редактирование профиля
  async editProfile(profileData) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.about,
      }),
    });
    return this._checkResponse(response);
  }

  // добавление новой карточки
  async addNewCard(cardData) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    });
    return this._checkResponse(response);
  }

  // постановка лайка
  async putLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // удаление лайка
  async deleteLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // удаление карточки
  async deleteCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // обновление аватара пользователя
  async changeAvatar(src) {
    const response = await fetch(`${this._userUrl}/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: src,
      }),
    });
    return this._checkResponse(response);
  }
}

// создание экземпляра класса Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "dc4cc6fb-4780-4de8-be6c-e7f4fd89da24",
    "Content-Type": "application/json",
  },
});

export default api;
