# Инструкция по обновлению изображений татуировок

## Способ 1: Использование Unsplash API

1. Зарегистрируйтесь на [Unsplash Developers](https://unsplash.com/developers)
2. Создайте приложение и получите Access Key
3. Используйте API для поиска изображений татуировок

## Способ 2: Ручной поиск на Unsplash

1. Перейдите на [Unsplash.com](https://unsplash.com)
2. Для каждого стиля выполните поиск:
   - Old School: "old school traditional tattoo"
   - New School: "new school colorful tattoo"
   - Blackwork: "blackwork tattoo geometric"
   - Realism: "realistic tattoo portrait"
   - И т.д.

3. Скопируйте URL изображения и обновите в файле `src/data/styles.ts`

## Способ 3: Использование готовых коллекций

Unsplash имеет коллекции татуировок. Найдите подходящие изображения и обновите URL.

## Формат URL для Unsplash

```
https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=800&q=80
```

Где `[ID]` - это ID фотографии из Unsplash.

## Пример обновления в styles.ts

```typescript
{ 
  id: 'old-school', 
  name: 'Old School (Traditional)', 
  description: '...',
  images: [
    'https://images.unsplash.com/photo-[ID1]?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-[ID2]?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-[ID3]?auto=format&fit=crop&w=800&q=80'
  ] 
}
```

