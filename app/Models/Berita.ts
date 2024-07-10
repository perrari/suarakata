import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Berita extends BaseModel {
  @column({ isPrimary: true })
  public id: number

@column()
public judul: string

@column()
public isi: string

@column()
public gambar1: string|null

@column()
public gambar2: string|null


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
