const request = require('supertest')
const app = require('../src/index')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/checkout')
      .send({
        "cliente": "Rodolfo",
        "productos": [{"code":"BT", "cantidad":12},{"code":"RT", "cantidad":5}]
    })
    expect(res.text).toEqual("{\"cliente\":\"Rodolfo\",\"productos\":[{\"code\":\"BT\",\"name\":\"blue t-shit\",\"price\":100,\"discount\":20,\"subTotal\":1200,\"descuentoTotal\":240,\"totalConDescuento\":960},{\"code\":\"RT\",\"name\":\"red t-shit\",\"price\":100,\"discount\":0,\"subTotal\":500,\"descuentoTotal\":0,\"totalConDescuento\":500}],\"subTotal\":1700,\"descuentoTotal\":240,\"total\":1460}")
  })
})