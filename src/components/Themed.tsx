import { ColorSchemeName, Text as DefaultText, useColorScheme, View as DefaultView } from 'react-native';
import Colors from 'constants/Colors';
import { FC } from 'react';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
  const theme = useColorScheme() as NonNullable<ColorSchemeName>
  const colorFromProps = props[theme];
  return colorFromProps ? colorFromProps : Colors[theme][colorName];
}

export const Text:FC<TextProps> = ({style, lightColor, darkColor, ...otherProps}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export const View:FC<ViewProps> = ({style, lightColor, darkColor, ...otherProps}) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}