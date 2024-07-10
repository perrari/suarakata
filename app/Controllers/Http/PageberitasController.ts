import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PageberitasController {

    public async index({view}: HttpContextContract) {
        return view.render('berita')
    }
}
