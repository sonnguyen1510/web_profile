namespace ClassResource
{
    public static class Setting
    {
        public static string BuildVersion { get; set; } = DateTime.Now.Ticks.ToString();
    }
}
