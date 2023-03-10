import React from 'react'
import styles from '../style/Home.module.css'
import PropertyAdv from './PropertyAdv';
import { useState } from 'react';



function Home() {

    //1) Liste des annonces immobilières

    const DATA = [
        {
            id: 'prop_ad_02sBpPQ4ta3HXRA8MLw5xr',
            type: 'flat',
            title: 'Très beau deux pièces au pied de la Sorbonne.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/519ddd1ccab3505e4e00f48fa3a1209b3bf16735ef93318e50461bfeab25c3ea/011e9841-d8fd-432c-a1cc-9b6638f7f521.jpg',
            living_area: 39.1,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '75005', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1480.0,
        },
        {
            id: 'prop_ad_02sBhSmpfC48UKU22HEP1O',
            type: 'flat',
            title: 'Charmant T2 loué vide à Compans-Caffarelli',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/5ce015aa9768e395942ed455d7bf649406a386163b55eaea7612e55be5395ed9/3b0a934f-c0da-42ef-b23b-68a3ee0f9e7e.jpg',
            living_area: 47.7,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '31000', city: 'Toulouse' },
            is_furnished: false,
            full_rent_price: 711.34,
        },
        {
            id: 'prop_ad_02sBqYyTeiSfBr853oMt3P',
            type: 'flat',
            title: 'Appartement fonctionnel au coeur de Toulon',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/596840a08d571e570780ab073cff36658521434aedd34969a98821477e790c69/ad5cf099-7646-4e7e-b7ab-2efd462ad49a.jpg',
            living_area: 47.3,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '83000', city: 'Toulon' },
            is_furnished: false,
            full_rent_price: 640.71,
        },
        {
            id: 'prop_ad_02sBHdjfzVAOwnGGEqlv1s',
            type: 'flat',
            title: 'Jolie 4 pièces moderne',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/cdf49ddbdd20402533ba47aa99061761b45a74ad9166bfc0928b3a515670a42c/c907b4ab-bb4d-4e53-9e0d-d68a391ed132.jpg',
            living_area: 95.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '76000', city: 'Rouen' },
            is_furnished: false,
            full_rent_price: 1100.0,
        },
        {
            id: 'prop_ad_02sBCrFG8mx7T9ukCZLSup',
            type: 'flat',
            title: 'Deux pièces fonctionnel loué vide à Valenton.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/363b7e72fa476cc6aa503ca5f1d6d46cbb79ad82bbd5a76a16ab7c2193b9e1d6/c4056d8e-1f6c-46ae-9196-f540fd383de3.jpg',
            living_area: 40.26,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '94460', city: 'Valenton' },
            is_furnished: false,
            full_rent_price: 887.08,
        },
        {
            id: 'prop_ad_02sAbFhu5JQSKnY97Fo1u6',
            type: 'flat',
            title: 'Chambre à louer dans une très belle colocation proche du RER.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/1e4a8908b1140a5f24728e41bb51c9a8d15f649e5a7866fbcc83563ea1da29b5/c9a1076a-de1d-4d82-9943-4801a5f9a558.jpg',
            living_area: 64.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '94140', city: 'Alfortville' },
            is_furnished: true,
            full_rent_price: 650.0,
        },
        {
            id: 'prop_ad_02rnrqCpc6umWJgmQF1iHj',
            type: 'flat',
            title: 'Une chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/3513246052da1f423859ecc50facdeeb681f5e5c5165ccc52b5e8439b9c4c143/7833e316-0d00-4e10-8dec-9ed912c17cc9.jpg',
            living_area: 86.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '76000', city: 'Rouen' },
            is_furnished: true,
            full_rent_price: 350.0,
        },
        {
            id: 'prop_ad_02sAZDKZc8y4qYsQEJCSqU',
            type: 'flat',
            title:
                'Trois chambres à louer dans une très belle colocation proche du RER.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/04bfd2087cb47886b937dbcddd7e96610ef71bb9386cce3dc4038cbe59a6d231/9264417e-ed3d-4d78-a2f9-bb42ef1c4cbd.jpg',
            living_area: 64.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '94140', city: 'Alfortville' },
            is_furnished: true,
            full_rent_price: 1950.0,
        },
        {
            id: 'prop_ad_02s0VQIsvau6wRTIOvRGbl',
            type: 'flat',
            title: '4 chambres disponibles dans une colocation à Ivry-sur-Seine.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/c1bae0cfe547459b831ef8d857f6d40ca0749cd5d089a86f13d889baf464b6bd/3f824ad3-908f-4361-a315-9e0e4345757b.jpg',
            living_area: 85.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '94200', city: 'Ivry-sur-Seine' },
            is_furnished: true,
            full_rent_price: 3000.0,
        },
        {
            id: 'prop_ad_02rvtmpYzFXn0tQtQKzoPM',
            type: 'flat',
            title: 'Trois pièces disponible à la location à Saint-Denis',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/a92eb6bfed45e203e1711f18208422d468e617bc675eb95bec0acdef116b822c/d9325475-a18b-43dc-a3d2-d54aebff22d6.jpg',
            living_area: 61.14,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '93200', city: 'Saint Denis' },
            is_furnished: true,
            full_rent_price: 1290.0,
        },
        {
            id: 'prop_ad_02rnr8Ynxl8yJoXaCBp0hQ',
            type: 'house',
            title: 'Belle maison à louer à Asnières-sur-Seine',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/efd03e638bca5d978dd9bc7547f6d019b39ceae6523ff53bfd733723904e4ae8/695b93ed-d279-44d2-b66d-245fc3ff5ca1.jpg',
            living_area: 118.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '92600', city: 'Asnières-sur-Seine' },
            is_furnished: true,
            full_rent_price: 2100.03,
        },
        {
            id: 'prop_ad_02rnrAy2Rm9vKT5cuc1Bva',
            type: 'flat',
            title: 'Appartement totalement aménagé à Asnières-sur-Seine.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/4e3a2be04ae253c740b1da82fca34f7cf18cecead3984291e703a333f22b33b7/f5a26cf3-6bab-474e-bd16-b595a642e7da.jpg',
            living_area: 43.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '92600', city: 'Asnières-sur-Seine' },
            is_furnished: true,
            full_rent_price: 1150.0,
        },
        {
            id: 'prop_ad_02s0V0C7SC9V3fdl0zbBri',
            type: 'flat',
            title: 'Trois pièces refait à neuf dans le IVe arrondissement de Marseille',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/7d2a5b9d4938be7182871b477a472ef7a42c5689f818d90c2fdc1530fb9f5372/98b90cb1-fd4e-4eec-a6e2-250f6ed6e70d.jpg',
            living_area: 47.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '13004', city: 'Marseille' },
            is_furnished: true,
            full_rent_price: 970.0,
        },
        {
            id: 'prop_ad_02s0qY7eBjtUnIhY5mDRBG',
            type: 'flat',
            title: 'Grand studio calme et fonctionnel',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/daf296739ab0c431747cb300a14dfb9958757f6e2fe82ed9971c0dd37cbc0721/0f10f1e2-9326-4828-ba1c-2f1d7e1b3cac.jpg',
            living_area: 35.0,
            rooms_count: 1,
            bedrooms_count: null,
            address: { postal_code: '91400', city: 'Orsay' },
            is_furnished: true,
            full_rent_price: 820.0,
        },
        {
            id: 'prop_ad_02sAh9CYVU99H4g0IyKj4W',
            type: 'flat',
            title: 'Beau studio loué meublé à Issy-les-Moulineaux',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/3a3f3ee42abb4717038e8d85822179deeb144d329f6bb01c73bb08a43407258a/4f25b9a6-f30a-4aff-9ef6-113891e59ab0.jpg',
            living_area: 19.0,
            rooms_count: 1,
            bedrooms_count: 1,
            address: { postal_code: '92130', city: 'Issy-les-Moulineaux' },
            is_furnished: true,
            full_rent_price: 750.0,
        },
        {
            id: 'prop_ad_02sAAbTUWa4fgV1HGpRHzx',
            type: 'flat',
            title: 'Joli deux pièces à deux pas des Buttes-Chaumont',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/5ba1a93378ebfbe7293551a5de30db0163c59c1cc32d4770ed8b21ec97f91a03/15d2d365-c0a8-4bc8-96d1-0c47bad7a3fa.jpg',
            living_area: 35.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '75019', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1110.0,
        },
        {
            id: 'prop_ad_02s90gYhjgSLZRggrU4jXc',
            type: 'flat',
            title: 'Magnifique T3 dans le 15ème',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/cc4be31c5a44f983ccbe611543e9a47dd5c48a143ca5464c6b33586105093ac7/86f4a145-b887-44aa-b2d5-695a66e21224.jpg',
            living_area: 68.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '75015', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 2300.0,
        },
        {
            id: 'prop_ad_02s8rR1Ugj3nnCd22nYLDa',
            type: 'flat',
            title:
                'Une chambre en colocation est disponible à la location à Saint-Denis',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/56d41fa792468d862f7b14daee5db919df2143129525198f5f6e2100e9ab04f6/c3258f51-5bda-45a2-956b-01ca34d93169.jpg',
            living_area: 61.14,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '93200', city: 'Saint Denis' },
            is_furnished: true,
            full_rent_price: 645.0,
        },
        {
            id: 'prop_ad_02s8EwzwpBdoFwmXlM8Hmx',
            type: 'flat',
            title: 'Chambre disponible dans une colocation à Montreuil',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/83eedca8edaedb32ba2121bc76885c353bc91ccbb3ffa00870ff428be4ad340a/6c265f3a-1f50-4e86-8fc6-fa80d23d53bf.jpg',
            living_area: 68.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '93100', city: 'Montreuil' },
            is_furnished: true,
            full_rent_price: 680.0,
        },
        {
            id: 'prop_ad_02rnr6Zi9zdnGPjiqFTnaO',
            type: 'flat',
            title: 'Trois pièces à la location à Pierrefitte-sur-Seine',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/90c05ea62160249a93f3ec7243055999ab97e1ecc334ce52302e26d2b0271668/636f8b33-8463-4815-8ac0-fe3edf725faa.jpg',
            living_area: 64.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '93380', city: 'Pierrefitte-sur-Seine' },
            is_furnished: false,
            full_rent_price: 897.0,
        },
        {
            id: 'prop_ad_02s8ERWbIyV8PxWDBrCdQ6',
            type: 'flat',
            title: 'Très beau quatre pièces à Montreuil disponible à la location',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/8154f170910325609fab41032ddb6e8aa8959015c0e563720754540f69def2d6/f0d11f07-5ecf-4fea-94a1-5ba945f58567.jpg',
            living_area: 68.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '93100', city: 'Montreuil' },
            is_furnished: true,
            full_rent_price: 1980.0,
        },
        {
            id: 'prop_ad_02s2d87UMmQdbuh2xh0FZz',
            type: 'flat',
            title:
                'Deux pièces aménagé avec goût dans le IVe arrondissement de Marseille',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/df131b4dd3bcfab42b5c87e65706b1899d8475fa7586e36b1ba61ec12ac0ec16/eb96e626-3844-4e81-b69f-59da76c6ef29.jpg',
            living_area: 32.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '13004', city: 'Marseille' },
            is_furnished: true,
            full_rent_price: 690.0,
        },
        {
            id: 'prop_ad_02rnqnCFrrmkdW0VZuomXa',
            type: 'flat',
            title: 'Appartement meublé avec vue sur la Tour Eiffel',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/03c6a959a7de048183e86eeec23984bb31b1dbe307a4969a4915cda2976917cb/48543e67-31b8-4b36-98be-89311fb1478a.jpg',
            living_area: 100.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '75015', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 6980.0,
        },
        {
            id: 'prop_ad_02s78G4lKXIFxcxrv60M2p',
            type: 'flat',
            title: 'Magnifique T3 meublé, dans  un bel appartement haussmannien',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/49c5d952d6d20d1cd8e2523da664d676ae96c72a62b4d777834b034dad48a55a/bfb885e7-9d1d-4520-a71e-0b9c9631dd8c.jpg',
            living_area: 79.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '75019', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 2300.0,
        },
        {
            id: 'prop_ad_02rnqvAxNzuIB6AmayfZfW',
            type: 'flat',
            title: 'Très beau trois pièces dans le 20e arrondissement.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/cfc6597bb8428b6b876519b4baa8516bffc2e521f6ee32505a9f7b2c627961af/f2d7903b-a172-4bc6-b789-6e89133ce79b.jpg',
            living_area: 64.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '75020', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1850.0,
        },
        {
            id: 'prop_ad_02rnsLo86GxZOPKzSg4VrT',
            type: 'flat',
            title: 'Chambre dans une colocation à Sartrouville',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/75964809e5d385c98ca26c07aface749b38b2266273881180a953826b76c8bb6/ebdcb6b4-68b9-4011-955c-dbd4debd4d3e.jpg',
            living_area: 90.84,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '78500', city: 'Sartrouville' },
            is_furnished: true,
            full_rent_price: 580.0,
        },
        {
            id: 'prop_ad_02s3hwdy6XhEB7V3mWqr8g',
            type: 'flat',
            title: '4 chambres disponibles dans une colocation à Sartrouville.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/e70214dd3b360fdda3de360ff4db0f90a39ca5942ce260ec3bcadaf3f792b972/14fffd8f-e5af-40a4-b318-5c2f34887ddd.jpg',
            living_area: 90.84,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '78500', city: 'Sartrouville' },
            is_furnished: true,
            full_rent_price: 2320.0,
        },
        {
            id: 'prop_ad_02s0rPPSRsCZtQGKbUYnxd',
            type: 'flat',
            title: 'Agréable deux pièces loué meublé à Courbevoie.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/6c7e1e424619d47d4b66c06bc678e4b723bb5d9d4def786372983d15dd6ad8c9/cecf02e7-1d7b-4fa5-a3fa-7b19db42ceaa.jpg',
            living_area: 48.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '92400', city: 'Courbevoie' },
            is_furnished: true,
            full_rent_price: 1295.0,
        },
        {
            id: 'prop_ad_02s0VZfslqR8Wdp8VxYiQl',
            type: 'flat',
            title: 'Une chambre est disponible dans une colocation à Ivry-sur-Seine.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/422e625f143495fe13fcce7e559031ac99d25f5946db204e44bcc9f1bc8ea80f/fd6b312b-3c25-4b38-8e7a-9e7c88c2a72d.jpg',
            living_area: 85.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '94200', city: 'Ivry-sur-Seine' },
            is_furnished: true,
            full_rent_price: 750.0,
        },
        {
            id: 'prop_ad_02s8Lc9Ao67mopwJfJAcJE',
            type: 'flat',
            title: 'Chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/a583cb23c630b94fb3f0f6961b62bbb893a816c7851664879b2af34013a64c9c/f904fd7b-5d4a-42c4-983f-81d07f782abb.jpg',
            living_area: 116.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '95110', city: 'Sannois' },
            is_furnished: true,
            full_rent_price: 456.0,
        },
        {
            id: 'prop_ad_02s0qSzPUM0ec2DbAGxT9x',
            type: 'flat',
            title: 'Très beau studio proche du métro Convention.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/48da3d587228d20d2e815d3808b3f808e87b613b097639eebf1c2225d0a8e7c2/f2c639fb-a3a8-4604-b8ed-9091b604de3e.jpg',
            living_area: 29.75,
            rooms_count: 1,
            bedrooms_count: 1,
            address: { postal_code: '75015', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1092.0,
        },
        {
            id: 'prop_ad_02s0J72O6hicqN1p5uukX6',
            type: 'flat',
            title: 'Deux pièces totalement neuf disponible à la location à Clamart',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/6f9e7b7292e3a33981101f3045dbf3347ba85f0f4c0bc4df4c20173f4aed31d4/ffefe0ec-b349-4222-a0f5-bfe9f1d47cad.jpg',
            living_area: 45.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '92100', city: 'Clamart' },
            is_furnished: false,
            full_rent_price: 1080.0,
        },
        {
            id: 'prop_ad_02rnqwKzY9dY7hlBhokVRA',
            type: 'flat',
            title: 'Deux chambres dans une colocation à Nice.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/1edb78a0005247f14f3552c1e4ffd827b85fc648293b9ef827e25ec1ee791b0b/a9686d2e-a394-4146-b78f-a38e059b321a.jpg',
            living_area: 37.65,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '06000', city: 'Nice' },
            is_furnished: true,
            full_rent_price: 1040.0,
        },
        {
            id: 'prop_ad_02rx1x8PGMX8gpwXRhI4w3',
            type: 'flat',
            title: 'Chambre dans une belle colocation à Créteil.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/7d13f6543902621eff6da30a3771404c6b3deaf1f1c915aafc3a86b449cc4fd9/42db2e29-5dce-45b1-8b9d-3e255522c038.jpg',
            living_area: 93.94,
            rooms_count: 6,
            bedrooms_count: 6,
            address: { postal_code: '94000', city: 'Créteil' },
            is_furnished: true,
            full_rent_price: 590.0,
        },
        {
            id: 'prop_ad_02rnCGAZkZYnAvDNIigSEq',
            type: 'flat',
            title: 'Très bel appartement à 5 minutes de la station Colbert.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/d8af6bb03b35c348dc9c920df0fa53f107e565bbc0ddb9c9fd318bce90e8c84c/f6804a9d-5012-4d50-840f-05e3022d30dd.jpg',
            living_area: 90.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '13002', city: 'Marseille' },
            is_furnished: true,
            full_rent_price: 1390.0,
        },
        {
            id: 'prop_ad_02rnrIfjSJMs3uchFFFdgT',
            type: 'flat',
            title: 'Trois pièces disponibles à la location à Fresnes',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/4cb14f2157fb056fce628804429c35dca3e0727921707e9f83611df23fc46426/504f1ad8-708a-4f7b-a8a1-1efd07bc4969.jpg',
            living_area: 57.0,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '94260', city: 'Fresnes' },
            is_furnished: true,
            full_rent_price: 1130.0,
        },
        {
            id: 'prop_ad_02rqjCDNox8iO0t66Ji42n',
            type: 'flat',
            title: 'Appartement disponible à la location dans le 12e',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/0b58183ea9a65a16a62857f5ce1f4383e1cfbfd33d2ca6907433c5a022334b2d/8d00a609-c9e1-4f52-96d4-5080ec85cd54.jpg',
            living_area: 76.64,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '75012', city: 'Paris' },
            is_furnished: false,
            full_rent_price: 2500.0,
        },
        {
            id: 'prop_ad_02roTxZvVBiPVZqdsjEjYa',
            type: 'flat',
            title: 'Chambre dans une colocation à Ivry-sur-Seine',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/7358950b0c1af63eeb7f7dc52ae2fc658da9b7a76393ec997fbb7399041f8576/5a1f6bf0-e79f-4a63-9be1-2efa59773cdd.jpg',
            living_area: 65.0,
            rooms_count: 4,
            bedrooms_count: 4,
            address: { postal_code: '94200', city: 'Ivry-sur-Seine' },
            is_furnished: true,
            full_rent_price: 600.0,
        },
        {
            id: 'prop_ad_02rnrDGzohhVHvVp21xnAV',
            type: 'flat',
            title: 'Charmant 3 pièces disponible à la location à Lille',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/f5f7b0f6be1237ace7637e2e65affb4c3646ca9e7d46b40979c0dcc89270ff58/ce4ed9dd-7416-464d-be52-583ac442f07c.jpg',
            living_area: 84.02,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '59000', city: 'Lille' },
            is_furnished: true,
            full_rent_price: 2107.0,
        },
        {
            id: 'prop_ad_02rnszEmjKds00z0WCKQGk',
            type: 'flat',
            title: 'Une chambre disponible dans une colocation refaite à neuf.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/69e87d2331c1ee1d3db214bb712fca2b059c0d6b41a1a4b52df88ef4890bb0b6/65e4aaa3-366f-4344-9803-869a08301513.jpg',
            living_area: 65.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '93130', city: 'Noisy-le-Sec' },
            is_furnished: true,
            full_rent_price: 590.0,
        },
        {
            id: 'prop_ad_02rnswPqcmcgGZCc42BITs',
            type: 'flat',
            title: 'Très belle chambre dans une colocation meublée',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/7e64fa68db94253079ee14001509c368935ed1b3be941894f498f40b78c685f6/36e41888-9d00-4240-8cdf-1d4110d5baf3.jpg',
            living_area: 63.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '94400', city: 'Vitry-sur-Seine' },
            is_furnished: true,
            full_rent_price: 535.0,
        },
        {
            id: 'prop_ad_02rrAVBVxwQ3eyBMgj6KTc',
            type: 'house',
            title:
                'Chambre dans une colocation à 3 min à pied de la Gare Palaiseau (RER B)',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/80af097a0ac754fde2adbc531af0e26ba74592b312b2df12ffc1008c571a976a/5bb62656-2c59-4b4a-a43c-0860c297cf0d.jpg',
            living_area: 168.0,
            rooms_count: 8,
            bedrooms_count: 6,
            address: { postal_code: '91120', city: 'Palaiseau' },
            is_furnished: true,
            full_rent_price: 660.0,
        },
        {
            id: 'prop_ad_02rnt0Bg4Vssglfl41FdYp',
            type: 'flat',
            title: 'Chambre de 12 m2 dans une colocation de 4 chambres',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/5247675256b7fedbe5556ca4038cc620d800c449214633b228b71f5fba6a9a8d/112c4dd7-3673-4b4a-beed-e950481f97ab.jpg',
            living_area: 62.21,
            rooms_count: 4,
            bedrooms_count: 4,
            address: { postal_code: '94000', city: 'Créteil' },
            is_furnished: true,
            full_rent_price: 610.0,
        },
        {
            id: 'prop_ad_02rnskXMqjgK19FulSebsi',
            type: 'flat',
            title: 'Une chambre de disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/e06f7060297dd36f64f917f555494b33592f3153ca3847304ae9413cb99e3f8b/c4b85747-c0a3-4b69-b5c0-46f6d54f7c2b.jpg',
            living_area: 95.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '94350', city: 'Champigny-sur-Marne' },
            is_furnished: true,
            full_rent_price: 500.0,
        },
        {
            id: 'prop_ad_02rnsjE1H2c9BhqwZLRhJl',
            type: 'flat',
            title: 'Chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/390c3eb092a9dffe29361184cc4855231a4a1cb243d10b3947178647d52ad419/1dc28ad0-3288-4acc-84c1-f123ad87f79a.jpg',
            living_area: 52.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '93430', city: 'Villetaneuse' },
            is_furnished: true,
            full_rent_price: 589.0,
        },
        {
            id: 'prop_ad_02rrt21LNlehE79s2FwfRZ',
            type: 'flat',
            title: 'Chambre disponible en colocation à Deuil-la-Barre',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/f882fc6e5026d9d97742835f3ab058cd0234ebd470affa5b4bc3a3f1ae0ba6de/bac43e5c-2e6a-44f6-aa06-a7887cf01609.jpg',
            living_area: 49.21,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '95170', city: 'Deuil-la-barre' },
            is_furnished: true,
            full_rent_price: 600.0,
        },
        {
            id: 'prop_ad_02s76OWBJxaTq7e4FM7K1e',
            type: 'flat',
            title: 'Beau deux pièces loué vide à Lille.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/45201b822055c00dec9b944d4f26931505b7be1a97486bdc1016155c70124727/ebd9aa25-2de2-4b47-a2c8-9b18373c65ff.jpg',
            living_area: 27.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '59260', city: 'Hellemmes - Lille' },
            is_furnished: false,
            full_rent_price: 560.0,
        },
        {
            id: 'prop_ad_02rnsVMzZtUFgWKKQfoj9h',
            type: 'flat',
            title: 'Chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/821ae0af77cd9650cf6b5589753433575d3e6f65ce818c6f9b095dba7afc4f61/029a22d9-a76c-4036-837d-82dbf6cc84e9.jpg',
            living_area: 116.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '95110', city: 'Sannois' },
            is_furnished: true,
            full_rent_price: 586.0,
        },
        {
            id: 'prop_ad_02rnsfsyhwSIsG62Lfx4rz',
            type: 'flat',
            title: 'Chambre dans une belle colocation à Créteil.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/dfe5bafa2c169373dfe6a7c815fbc9ff14dc27bce8a22b1216b826eab2238d9c/f6482f8f-5eb6-491e-87d7-5f8ed7855438.jpg',
            living_area: 93.94,
            rooms_count: 6,
            bedrooms_count: 6,
            address: { postal_code: '94000', city: 'Créteil' },
            is_furnished: true,
            full_rent_price: 620.0,
        },
        {
            id: 'prop_ad_02rnshnks73qL4TBesvJrK',
            type: 'flat',
            title: 'Une chambre en colocation est disponible',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/49bbcda2b20c29315a9d7434f35db2f75aee5ac77f15446a75e8aac6d4a5934f/51fdc156-d18c-4ead-b06e-71ae7c275d78.jpg',
            living_area: 82.4,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '95000', city: 'Cergy' },
            is_furnished: true,
            full_rent_price: 530.0,
        },
        {
            id: 'prop_ad_02rr7Pa68ggQ5eQjZd8JBM',
            type: 'flat',
            title: 'Chambre dans une colocation à Saint-Denis',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/3525444e82e0b5d7560c199df090824c889c5b9eb18d791741bdee026994fdfd/39b93bc8-97f6-48f5-8e65-9e9a70fab551.jpg',
            living_area: 79.5,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '93200', city: 'Saint-Denis' },
            is_furnished: true,
            full_rent_price: 520.0,
        },
        {
            id: 'prop_ad_02rr79OkJcphXivUAeUOMt',
            type: 'flat',
            title: 'Une chambre disponible dans une colocation à Orléans',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/d7072d8132f63c02d0c5dfd8246fba57c59e34e35dbfce0a46cd7c2ec4da578b/1617989e-cd4e-4852-bcdb-f6fa1efa9c8a.jpg',
            living_area: 105.0,
            rooms_count: 7,
            bedrooms_count: 4,
            address: { postal_code: '45100', city: 'Orléans' },
            is_furnished: true,
            full_rent_price: 490.0,
        },
        {
            id: 'prop_ad_02rnsKD8tvfnvuTOd1t6sU',
            type: 'flat',
            title: 'Chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/9b7a215a67fa39222b13e061576fbc21e4a3f02649322c3a4be1e65ba55e3bff/5b2df6fe-aacc-4989-90d7-9b3aa58273b7.jpg',
            living_area: 76.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '91300', city: 'Massy' },
            is_furnished: true,
            full_rent_price: 590.0,
        },
        {
            id: 'prop_ad_02rnsITqj1VVS4TKLgY9Ll',
            type: 'house',
            title: "Chambre disponible dans une colocation d'exception",
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/f91dc3f817629542c25ac8072138224d3d0e4daa52f2cb499c1298b5b70d8305/9c486f75-40ae-4f42-9d9f-b7af85039366.jpg',
            living_area: 184.0,
            rooms_count: 9,
            bedrooms_count: 7,
            address: { postal_code: '93130', city: 'Noisy-le-Sec' },
            is_furnished: true,
            full_rent_price: 620.0,
        },
        {
            id: 'prop_ad_02rnqj93Lzx13AOhLRkXyc',
            type: 'flat',
            title: 'Appartement lumineux et calme à Versailles',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/bea1fc0c1b845d80a8b97ea20fef0bb812cdb8c0262ab19ded36586c119d2299/65f52c99-dfd9-409d-9243-5396c1fadac8.jpg',
            living_area: 97.4,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '78000', city: 'Versailles' },
            is_furnished: false,
            full_rent_price: 1990.0,
        },
        {
            id: 'prop_ad_02rnrCKGGtbxbksYiVAjlf',
            type: 'flat',
            title: 'Très beau studio rénové à proximité des transports.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/8bf9b9736b08b9e403106d965577cfa7a49c70ede4e5d6d96449ac7b9a3f1c31/51679b9a-a7d1-49eb-a59f-2454387fc73a.jpg',
            living_area: 34.41,
            rooms_count: 1,
            bedrooms_count: 1,
            address: { postal_code: '78200', city: 'Mantes la Jolie' },
            is_furnished: true,
            full_rent_price: 640.0,
        },
        {
            id: 'prop_ad_02s3oy0ajjk08n8DGcfLIT',
            type: 'flat',
            title: 'Appartement fonctionnel et moderne au cœur de Neuilly.',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/a2c44b6479a7875f141b786e3d5fe8faf46282eac716677e386c6840b710e497/41e931f6-f5f0-4f7b-816b-527271535398.jpg',
            living_area: 64.89,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '92200', city: 'Neuilly-sur-Seine' },
            is_furnished: true,
            full_rent_price: 2490.0,
        },
        {
            id: 'prop_ad_02rrK5PidbMvtPc7rqfDlQ',
            type: 'flat',
            title: 'Appartement meublé près du parc des Buttes-Chaumont',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/bffad257cd282c1dee5543dfc562937f597244f026807da03927e04cc5dae729/420dafcd-daa5-44af-a600-9167a71dd970.jpg',
            living_area: 51.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '75019', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1475.0,
        },
        {
            id: 'prop_ad_02rnsKq5CYncMASmM5CcYg',
            type: 'house',
            title: "Chambre disponible dans une colocation d'exception.",
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/6ad874b6f3545e0251c1b582b832b38561d5a33aef66d294d5a78ab8dae56916/fb379860-76da-47a1-b158-c2c0755e968b.jpg',
            living_area: 184.0,
            rooms_count: 9,
            bedrooms_count: 7,
            address: { postal_code: '93130', city: 'Noisy-le-Sec' },
            is_furnished: true,
            full_rent_price: 620.0,
        },
        {
            id: 'prop_ad_02rnrMboWd3XXL8VNfyQQZ',
            type: 'flat',
            title: 'Chambres en colocation disponibles',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/e21060bb78165112e31df49eaa84754a105ef12a68aea41cd5dcbdd5809a4e53/f6a3825b-5e82-4ed4-9625-2803061ad33a.jpg',
            living_area: 86.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '76000', city: 'Rouen' },
            is_furnished: true,
            full_rent_price: 1490.0,
        },
        {
            id: 'prop_ad_02rnqmCYTNs3em9Ua0kIYC',
            type: 'flat',
            title: 'Joli studio à Orsay',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/1a5ee919130e90b1ac1966ee59768bba4bf4845eece74e15fb1857e18ead0ad4/59b1e0eb-6013-4fb9-a34c-188924777190.jpg',
            living_area: 15.97,
            rooms_count: 1,
            bedrooms_count: 1,
            address: { postal_code: '91400', city: 'Orsay' },
            is_furnished: true,
            full_rent_price: 653.0,
        },
        {
            id: 'prop_ad_02rsRvdA2TezK01o28DIps',
            type: 'flat',
            title: 'Beau deux pièces à Lille',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/fa9dd272a0bc6d28ea5c83be04acc4b4f5c1608b908a28efab3e67cb56ec868f/9b6652e9-db6a-4a78-b3a5-299ef167cd91.jpg',
            living_area: 35.0,
            rooms_count: 2,
            bedrooms_count: 1,
            address: { postal_code: '59800', city: 'Lille' },
            is_furnished: false,
            full_rent_price: 593.0,
        },
        {
            id: 'prop_ad_02rnr9qsfLxgSkHwp9esT8',
            type: 'flat',
            title: 'Trois chambres disponibles pour une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/55f3a441400804a3795fe3a04df18a3cd6d52653dd55f15c51593fb080e5b832/d35566dc-a9d2-402d-89ba-1fdb369f19ff.jpg',
            living_area: 52.0,
            rooms_count: 4,
            bedrooms_count: 3,
            address: { postal_code: '93430', city: 'Villetaneuse' },
            is_furnished: true,
            full_rent_price: 1727.0,
        },
        {
            id: 'prop_ad_02rx24yjjw0NpwnFhrsGfA',
            type: 'flat',
            title: 'Studio avec verrière dans le 20ème arrondissement de Paris',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/38fd6a7963e89359f2bb1e0d140baa8633c5653fcbb9882515be9ea196bba8a7/a5b6f389-2d7b-4f82-9686-d279d8dc04e5.jpg',
            living_area: 31.0,
            rooms_count: 1,
            bedrooms_count: 1,
            address: { postal_code: '75020', city: 'Paris' },
            is_furnished: true,
            full_rent_price: 1150.0,
        },
        {
            id: 'prop_ad_02sBrGCND68mCfdMM49VNn',
            type: 'flat',
            title: 'Trois pièces fonctionnel à la location à Toulon',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/aa58add26f157b589ece7b42651c7439c93ce236d3e155e3d63a0b5152fe3043/5f9a22c9-b285-4bd9-ad6c-c10ee521fd29.jpg',
            living_area: 58.5,
            rooms_count: 3,
            bedrooms_count: 2,
            address: { postal_code: '83000', city: 'Toulon' },
            is_furnished: false,
            full_rent_price: 810.21,
        },
        {
            id: 'prop_ad_02rnrlECh8BOvk80XFA7NW',
            type: 'flat',
            title: 'Chambre disponible dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/9b0e9998d4b517323c0025ae889e3f68445c011a52e5932149c85db8904b7956/b942c32d-3d5d-47e8-bbcc-001503ba4125.jpg',
            living_area: 79.5,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '93200', city: 'Saint-Denis' },
            is_furnished: true,
            full_rent_price: 650.0,
        },
        {
            id: 'prop_ad_02rnsmQMjNZgofg69D3gV4',
            type: 'flat',
            title: 'Chambre dans une colocation',
            main_picture:
                'https://pictures.izzyhom.io/properties/1024/eyJpbWFnZSI6ICJlYmMzZmMxNC05MGY0LTQ1YTgtOGRhZi0xZjRjNzdjYjE0MmYucG5nIn0=/6a6889a2063a13994fb8b136747bbce66e3b351c03da287c388fa69c82694999/381e950f-3d88-48c8-8617-f164f4428d44.jpg',
            living_area: 75.0,
            rooms_count: 5,
            bedrooms_count: 4,
            address: { postal_code: '94000', city: 'Créteil' },
            is_furnished: true,
            full_rent_price: 590.0,
        },
    ];

    //2) Liste de chacune des villes sans doublon => L'idée est d'intégrer un filtre sur chaque ville
    let allCity = DATA.map((data, i) => {
        return (data.address.city);

    })
    //console.log(allCity); Toutes les villes avec doublon
    let allcityUnique = allCity.filter((x, i) => allCity.indexOf(x) === i) //sans doublon pour lister les différentes villes 
    //console.log(allcityUnique); array with ['Paris', 'Toulouse', 'Toulon', 'Rouen', 'Valenton', 'Alfortville', 'Ivry-sur-Seine', 'Saint Denis', 'Asnières-sur-Seine', 'Marseille', 'Orsay', 'Issy-les-Moulineaux', 'Montreuil', 'Pierrefitte-sur-Seine', 'Sartrouville', 'Courbevoie', 'Sannois', 'Clamart', 'Nice', 'Créteil', 'Fresnes', 'Lille', 'Noisy-le-Sec', 'Vitry-sur-Seine', 'Palaiseau', 'Champigny-sur-Marne', 'Villetaneuse', 'Deuil-la-barre', 'Hellemmes - Lille', 'Cergy', 'Saint-Denis', 'Orléans', 'Massy', 'Versailles', 'Mantes la Jolie', 'Neuilly-sur-Seine']




    //3) Dans un premier temps, récupération de chacune des informations des biens immobiliers, sans filtre, afin de les intégrer dans le composants enfant PropertyAdv.tsx
    /* Without any filters
    const dataList = DATA.map((data, i) => {
        //console.log(data); => tableau d'objet 
            return <PropertyAdv key={i} id={data.id} type={data.type} title={data.title} main_picture={data.main_picture} living_area={data.living_area} rooms_count={data.rooms_count} bedrooms_count={data.bedrooms_count} address={data.address} is_furnished={data.is_furnished} full_rent_price={data.full_rent_price}/>
    })
    */



    //5) Enregistrement d'une variable d'état "parameters" sous forme de tableau vide, mise à jour de cette variable au click sur les filtres
    const [parameters, setParameters] = useState<any[]>([]);
    //console.log(parameters); //Paris apparaît bien si je clique sur la checkbox Paris



    //6) Initialisation d'une constante filteredData pour faire ressortir la liste des biens en location selon les filtres
    const filteredDATA = DATA.filter((data) => {
        //Si chacun des filtres sont séléctionnées, la liste des annonces sera mis à jour en conséquence
        if (parameters.includes("Paris") && parameters.includes("2")) {
            return data.address.city === "Paris" && data.bedrooms_count === 2;
            //Si seulement le filtre sur la ville de Paris est séléctionné, seulement les annonces à Paris ressortirons
        } else if (parameters.includes("Paris")) {
            return data.address.city === "Paris";
        } else if (parameters.includes("2")) {
            return data.bedrooms_count === 2;
            //Si aucun des filtres n'est selectionné, toutes les annonces apparaissent à l'écran
        } else {
            return DATA;
        }
    });


    //7) Le filteredDATA.map qui permet d'afficher les informations de chacun des biens mis en location dans le component PropertyAdv se trouve directement dans le return final 

    //8) Préparation des différents filtres dans le return final sous forme de checkbox. L'attribut onChange nous permet d'écouter la changement de la valeur sur l'input

    //9) Initialisation d'une fonction filterHandler afin de mettre à jour la variable d'état "parameters" en fonction du clic sur les checkbox
        //event : React.ChangeEvent<HTMLInputElement> il faut rajouter un type pour le paramètre event 
        //setParameters([...parameters, event.target.value]) la variable d'état parameters n'avaient pas de type, j'ai volontairement choisi "any" car j'ai plusieurs types possibles
    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //Au clic sur la checkbox, mis à jour de parameters avec la valeur de la checkbox
        if (event.target.checked) {
            setParameters([...parameters, event.target.value])
            //Lorsque la checkbox est décochée, nous récupérons les données sans le filtre. parameter !== ne sera pas égale à seulement le filtre event.target.value
        } else {
            setParameters(
                parameters.filter((parameter) => parameter !== event.target.value)
            )
        }


    }


    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>IZZYHOM</div>
                <div className={styles.list}>Liste des logements à la location</div>
                <div>Filtre(s) : 
                    <label htmlFor="Ville : Paris">
                        <input
                            type="checkbox"
                            onChange={filterHandler}
                            value="Paris"
                            id="Ville : Paris"
                        />
                        <span>Paris</span>
                    </label>

                    <label htmlFor='Nombre de chambre : 2'>
                        <input
                            type="checkbox"
                            onChange={filterHandler}
                            value="2"
                            id="Nombre de chambre : 2"
                        />
                        <span>Nombre de chambre : 2</span>
                    </label>

                </div>
            </div>
            <div className={styles.propertyAd}>
                {/*dataList : first of all, with the initial map without any filter*/}
                {filteredDATA.map((data, i) => (
                    <PropertyAdv
                        key={i}
                        id={data.id}
                        type={data.type}
                        title={data.title}
                        main_picture={data.main_picture}
                        living_area={data.living_area}
                        rooms_count={data.rooms_count}
                        bedrooms_count={data.bedrooms_count}
                        address={data.address}
                        is_furnished={data.is_furnished}
                        full_rent_price={data.full_rent_price}
                    />
                ))}
            </div>
        </div>

    )
}

export default Home