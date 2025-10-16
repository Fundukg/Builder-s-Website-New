import { Target, Heart, Award, Users, LucideIcon, Lock, Wrench, TreePine, Building, Hammer, Construction, Home } from 'lucide-react'

// Создаем тип для доступных иконок
export type IconName =
  | 'Target'
  | 'Heart'
  | 'Award'
  | 'Users'
  | 'Lock'
  | 'Wrench'
  | 'TreePine'
  | 'Building'
  | 'Hammer'
  | 'Construction'
  | 'Home'

// Объект, который сопоставляет строковые названия с компонентами иконок
export const iconMap: Record<IconName, LucideIcon> = {
  Target,
  Heart,
  Award,
  Users,
  Lock,
  Wrench,
  TreePine,
  Building,
  Hammer,
  Construction,
  Home,
}

// Вспомогательная функция для безопасного получения иконки
export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName as IconName] || Target // Target как иконка по умолчанию
}
