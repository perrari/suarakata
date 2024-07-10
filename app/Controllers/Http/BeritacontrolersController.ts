import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Berita from 'App/Models/Berita'
export default class BeritacontrolersController {
    public async store({ request,response }: HttpContextContract) {
        const judulBerita = request.input('judulBerita')
        const isiBerita = request.input('isiBerita')
        
        const gambarBerita1 = request.file('gambarBerita1')
        const gambarBerita2 = request.file('gambarBerita2')
        let gambarBerita1Path = null
        let gambarBerita2Path = null
        
        if (gambarBerita1) {
            const fileName1 = `${new Date().getTime()}_${gambarBerita1!.clientName}`
            await gambarBerita1.move(Application.publicPath('img'), {
              name: fileName1,
              overwrite: true
        })
        }
        
        if (gambarBerita2) {
            const fileName2 = `${new Date().getTime()}_${gambarBerita2.clientName}`
            await gambarBerita2.move(Application.publicPath('img'), {
              name: fileName2,
              overwrite: true
            })
        }
        
        try {
            const berita = await Berita.create({
              judul: judulBerita,
              isi: isiBerita,
              gambar1: gambarBerita1Path,
              gambar2: gambarBerita2Path,
            })

        
            return response.redirect().toPath('/dashboard')
          } catch (error) {
            return response.status(500).json({
              status: 'error',
              message: 'Gagal menyimpan data berita',
              error: error.message,
        })
          }
    }
}