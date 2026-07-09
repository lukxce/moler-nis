import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Stavka cenovnika',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naziv stavke',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      description: 'Mora se poklapati sa slugom odgovarajuće stranice usluge',
      options: {
        list: [
          {title: 'Unutrašnji molerski radovi', value: 'unutrasnji-radovi'},
          {title: 'Fasadni radovi', value: 'fasadni-radovi'},
          {title: 'Dekorativni premazi i tapete', value: 'dekorativni-premazi'},
          {title: 'Sanacija i renoviranje', value: 'sanacija-renoviranje'},
        ],
      },
    }),
    defineField({
      name: 'unit',
      title: 'Jedinica mere',
      type: 'string',
      description: 'npr. "po m²", "po komadu", "fiksno"',
      options: {
        list: [
          {title: 'po m²', value: 'm2'},
          {title: 'po komadu', value: 'kom'},
          {title: 'fiksna cena', value: 'fiksno'},
          {title: 'po dužnom metru', value: 'dm'},
        ],
      },
      initialValue: 'm2',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kratak opis',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'priceFrom',
      title: 'Cena od (RSD)',
      type: 'number',
    }),
    defineField({
      name: 'priceTo',
      title: 'Cena do (RSD, opciono)',
      type: 'number',
    }),
    defineField({
      name: 'priceNote',
      title: 'Napomena o ceni',
      type: 'string',
      description: 'npr. "zavisi od broja slojeva i stanja podloge"',
    }),
    defineField({
      name: 'body',
      title: 'Detaljan opis',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Slika',
      type: 'image',
    }),
    defineField({
      name: 'featured',
      title: 'Istaknuto na početnoj',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Redosled',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
